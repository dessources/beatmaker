import React, { useState, useEffect, useCallback, useRef } from 'react';
import TransportControls from './components/TransportControls';
import TrackList from './components/TrackList';
import SoundLibraryModal from './components/SoundLibraryModal';
import {
  audioEngine,
  INITIAL_TRACKS,
  STUDIO_PRESETS,
  createPatternFrom16,
} from './utils/audioEngine';

const TRACK_COLORS = [
  'cyan',
  'violet',
  'rose',
  'amber',
  'emerald',
  'fuchsia',
  'indigo',
  'teal',
  'pink',
  'sky',
];

export default function App() {
  // Global Playback Engine State
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [totalSteps, setTotalSteps] = useState(16);
  const [currentStep, setCurrentStep] = useState(0);
  const [masterVolume, setMasterVolume] = useState(0.85);
  const [activePreset, setActivePreset] = useState('symphonic-trap');

  // Tracks & Sound Library State
  const [tracks, setTracks] = useState(INITIAL_TRACKS);
  const [availableSounds, setAvailableSounds] = useState(() =>
    audioEngine.getAllSounds()
  );

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTargetTrackId, setModalTargetTrackId] = useState(null);

  // Refs for low-latency audio scheduling without stale closures
  const tracksRef = useRef(tracks);
  const bpmRef = useRef(bpm);
  const totalStepsRef = useRef(totalSteps);
  const currentStepRef = useRef(currentStep);

  useEffect(() => {
    tracksRef.current = tracks;
  }, [tracks]);

  useEffect(() => {
    bpmRef.current = bpm;
  }, [bpm]);

  useEffect(() => {
    totalStepsRef.current = totalSteps;
    setCurrentStep((prev) => prev % totalSteps);
  }, [totalSteps]);

  useEffect(() => {
    currentStepRef.current = currentStep;
  }, [currentStep]);

  // Trigger all active, unmuted tracks for a given step index
  const triggerStepAudio = useCallback((stepIndex) => {
    const currentTracks = tracksRef.current;
    const anySolo = currentTracks.some((t) => t.solo);

    currentTracks.forEach((track) => {
      if (!track.steps[stepIndex]) return;
      if (track.muted) return;
      if (anySolo && !track.solo) return;

      audioEngine.playSound(track.soundId, track.volume, stepIndex);
    });
  }, []);

  // High-precision requestAnimationFrame delta clock synced to BPM (16th notes)
  useEffect(() => {
    if (!isPlaying) return;

    audioEngine.init();
    let animationFrameId = null;
    let lastStepTime = performance.now();

    // Immediately play the current step when pressing Play
    triggerStepAudio(currentStepRef.current);

    const tick = (now) => {
      // 1 beat = 60 / bpm seconds; 1 sixteenth note = 1/4 of a beat
      const stepDurationMs = (60 / bpmRef.current / 4) * 1000;

      if (now - lastStepTime >= stepDurationMs) {
        // Advance playhead and compensate for any minor frame delta
        lastStepTime += stepDurationMs;
        if (now - lastStepTime > stepDurationMs * 2) {
          lastStepTime = now;
        }

        const nextStep =
          (currentStepRef.current + 1) % totalStepsRef.current;
        currentStepRef.current = nextStep;
        setCurrentStep(nextStep);
        triggerStepAudio(nextStep);
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPlaying, triggerStepAudio]);

  // Spacebar shortcut for Play / Pause
  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = e.target?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'select' || tag === 'textarea') return;
      if (e.code === 'Space') {
        e.preventDefault();
        audioEngine.init();
        setIsPlaying((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Transport Handlers
  const handleTogglePlay = useCallback(() => {
    audioEngine.init();
    setIsPlaying((prev) => !prev);
  }, []);

  const handleStop = useCallback(() => {
    setIsPlaying(false);
    currentStepRef.current = 0;
    setCurrentStep(0);
  }, []);

  const handleMasterVolumeChange = useCallback((value) => {
    setMasterVolume(value);
    audioEngine.setMasterVolume(value);
  }, []);

  const handleJumpToStep = useCallback(
    (stepIdx) => {
      audioEngine.init();
      currentStepRef.current = stepIdx;
      setCurrentStep(stepIdx);
      if (!isPlaying) {
        triggerStepAudio(stepIdx);
      }
    },
    [isPlaying, triggerStepAudio]
  );

  // Track & Step Handlers
  const handleToggleStep = useCallback((trackId, stepIndex) => {
    audioEngine.init();
    setTracks((prevTracks) =>
      prevTracks.map((track) => {
        if (track.id !== trackId) return track;
        const nextSteps = [...track.steps];
        const becomingActive = !nextSteps[stepIndex];
        nextSteps[stepIndex] = becomingActive;

        // Audition the sound when toggling a step ON while paused
        if (becomingActive && !track.muted) {
          audioEngine.playSound(track.soundId, track.volume, stepIndex);
        }
        return { ...track, steps: nextSteps };
      })
    );
  }, []);

  const handleToggleMute = useCallback((trackId) => {
    setTracks((prev) =>
      prev.map((t) => (t.id === trackId ? { ...t, muted: !t.muted } : t))
    );
  }, []);

  const handleToggleSolo = useCallback((trackId) => {
    setTracks((prev) =>
      prev.map((t) => (t.id === trackId ? { ...t, solo: !t.solo } : t))
    );
  }, []);

  const handleVolumeChange = useCallback((trackId, volume) => {
    setTracks((prev) =>
      prev.map((t) => (t.id === trackId ? { ...t, volume } : t))
    );
  }, []);

  const handleSoundChange = useCallback((trackId, soundId) => {
    audioEngine.init();
    const soundObj = audioEngine.getSoundById(soundId);
    setTracks((prev) =>
      prev.map((t) => {
        if (t.id !== trackId) return t;
        audioEngine.playSound(soundId, t.volume, 0);
        return {
          ...t,
          soundId,
          category: soundObj?.category || t.category,
        };
      })
    );
  }, []);

  const handlePreviewTrack = useCallback((track) => {
    audioEngine.init();
    audioEngine.playSound(track.soundId, track.volume || 0.85, 0);
  }, []);

  const handlePreviewSound = useCallback((soundId) => {
    audioEngine.init();
    audioEngine.playSound(soundId, 0.85, 0);
  }, []);

  const handleClearTrack = useCallback((trackId) => {
    setTracks((prev) =>
      prev.map((t) =>
        t.id === trackId ? { ...t, steps: new Array(64).fill(false) } : t
      )
    );
  }, []);

  const handleDeleteTrack = useCallback((trackId) => {
    setTracks((prev) => prev.filter((t) => t.id !== trackId));
  }, []);

  const handleClearAll = useCallback(() => {
    setTracks((prev) =>
      prev.map((t) => ({ ...t, steps: new Array(64).fill(false) }))
    );
  }, []);

  const handleLoadPreset = useCallback((presetKey) => {
    const preset = STUDIO_PRESETS[presetKey];
    if (!preset) return;
    setActivePreset(presetKey);
    setBpm(preset.bpm);
    setTracks((prev) =>
      prev.map((track) => {
        const pattern16 = preset.patterns[track.id];
        if (!pattern16) return track;
        return {
          ...track,
          steps: createPatternFrom16(pattern16),
        };
      })
    );
  }, []);

  const handleRandomize = useCallback(() => {
    audioEngine.init();
    setTracks((prev) =>
      prev.map((track, idx) => {
        const density =
          idx === 0
            ? 0.25 // Kick
            : idx === 1 || idx === 3
            ? 0.16 // Snare / Clap
            : idx === 2
            ? 0.45 // Hi-Hat
            : 0.18; // Melodic & Classical tracks
        const steps = new Array(64).fill(false).map((_, stepIdx) => {
          if (idx === 0 && stepIdx % 16 === 0) return true; // Keep downbeat kick anchor
          if (idx === 1 && (stepIdx % 16 === 4 || stepIdx % 16 === 12))
            return true; // Backbeat snare
          return Math.random() < density;
        });
        return { ...track, steps };
      })
    );
  }, []);

  // Custom Track & Sound Library Modal Handlers
  const handleCreateTrackWithSound = useCallback(
    (name, soundId, category = 'Custom Samples') => {
      audioEngine.init();
      setTracks((prev) => {
        const nextColor = TRACK_COLORS[prev.length % TRACK_COLORS.length];
        const newTrack = {
          id: `track-custom-${Date.now()}`,
          name,
          category,
          soundId,
          color: nextColor,
          volume: 0.85,
          muted: false,
          solo: false,
          isCustom: true,
          steps: createPatternFrom16([
            1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
          ]),
        };
        return [...prev, newTrack];
      });
      audioEngine.playSound(soundId, 0.85, 0);
    },
    []
  );

  const handleUploadCustomFile = useCallback(async (file) => {
    const customSound = await audioEngine.registerCustomSoundFromFile(file);
    setAvailableSounds(audioEngine.getAllSounds());
    return customSound;
  }, []);

  const handleLoadCustomUrl = useCallback(async (name, url) => {
    const customSound = await audioEngine.registerCustomSoundFromUrl(name, url);
    setAvailableSounds(audioEngine.getAllSounds());
    return customSound;
  }, []);

  const handleOpenSoundModalForTrack = useCallback((trackId) => {
    setModalTargetTrackId(trackId);
    setIsModalOpen(true);
  }, []);

  const handleOpenCustomModal = useCallback(() => {
    setModalTargetTrackId(null);
    setIsModalOpen(true);
  }, []);

  const modalTargetTrack = tracks.find((t) => t.id === modalTargetTrackId) || null;

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col justify-between">
      <div>
        {/* Top Studio Transport & Master Bar */}
        <TransportControls
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
          onStop={handleStop}
          bpm={bpm}
          onBpmChange={setBpm}
          totalSteps={totalSteps}
          onTotalStepsChange={setTotalSteps}
          masterVolume={masterVolume}
          onMasterVolumeChange={handleMasterVolumeChange}
          currentStep={currentStep}
          activePreset={activePreset}
          onLoadPreset={handleLoadPreset}
          onRandomize={handleRandomize}
          onClearAll={handleClearAll}
          onOpenCustomModal={handleOpenCustomModal}
        />

        {/* Multi-Track Sequencer Grid */}
        <main>
          <TrackList
            tracks={tracks}
            totalSteps={totalSteps}
            currentStep={currentStep}
            isPlaying={isPlaying}
            availableSounds={availableSounds}
            onToggleStep={handleToggleStep}
            onToggleMute={handleToggleMute}
            onToggleSolo={handleToggleSolo}
            onVolumeChange={handleVolumeChange}
            onSoundChange={handleSoundChange}
            onPreviewTrack={handlePreviewTrack}
            onClearTrack={handleClearTrack}
            onDeleteTrack={handleDeleteTrack}
            onOpenSoundModalForTrack={handleOpenSoundModalForTrack}
            onOpenCustomModal={handleOpenCustomModal}
            onJumpToStep={handleJumpToStep}
          />
        </main>
      </div>

      {/* Sound Library & Custom Audio Importer Modal */}
      <SoundLibraryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        targetTrack={modalTargetTrack}
        availableSounds={availableSounds}
        onSelectSoundForTrack={handleSoundChange}
        onCreateTrackWithSound={handleCreateTrackWithSound}
        onUploadCustomFile={handleUploadCustomFile}
        onLoadCustomUrl={handleLoadCustomUrl}
        onPreviewSound={handlePreviewSound}
      />
    </div>
  );
}
