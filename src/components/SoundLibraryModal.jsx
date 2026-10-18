import React, { useState } from 'react';
import {
  X,
  Volume2,
  Upload,
  Link2,
  Plus,
  Check,
  Sparkles,
  Music,
  AlertCircle,
} from 'lucide-react';
import { SOUND_CATEGORIES } from '../utils/audioEngine';

export default function SoundLibraryModal({
  isOpen,
  onClose,
  targetTrack,
  availableSounds,
  onSelectSoundForTrack,
  onCreateTrackWithSound,
  onUploadCustomFile,
  onLoadCustomUrl,
  onPreviewSound,
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [customTrackName, setCustomTrackName] = useState('');
  const [customUrl, setCustomUrl] = useState('');
  const [isLoadingSample, setIsLoadingSample] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [assignMode, setAssignMode] = useState(
    targetTrack ? 'replace' : 'new-track'
  );

  if (!isOpen) return null;

  const filteredSounds =
    selectedCategory === 'All'
      ? availableSounds
      : availableSounds.filter((s) => s.category === selectedCategory);

  const handleUrlSubmit = async (e) => {
    e.preventDefault();
    if (!customUrl.trim()) return;
    setErrorMessage('');
    setIsLoadingSample(true);
    try {
      const sound = await onLoadCustomUrl(
        customTrackName.trim() || 'Custom URL Sample',
        customUrl.trim()
      );
      if (targetTrack && assignMode === 'replace') {
        onSelectSoundForTrack(targetTrack.id, sound.id);
      } else {
        onCreateTrackWithSound(
          customTrackName.trim() || sound.name,
          sound.id,
          'Custom Samples'
        );
      }
      setCustomUrl('');
      setCustomTrackName('');
      onClose();
    } catch (err) {
      setErrorMessage(
        err?.message ||
          'Could not decode audio URL. Make sure it points to a valid CORS-enabled .wav or .mp3 file.'
      );
    } finally {
      setIsLoadingSample(false);
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setErrorMessage('');
    setIsLoadingSample(true);
    try {
      const sound = await onUploadCustomFile(file);
      const trackLabel = customTrackName.trim() || sound.name;
      if (targetTrack && assignMode === 'replace') {
        onSelectSoundForTrack(targetTrack.id, sound.id);
      } else {
        onCreateTrackWithSound(trackLabel, sound.id, 'Custom Samples');
      }
      setCustomTrackName('');
      onClose();
    } catch (err) {
      setErrorMessage(
        err?.message ||
          'Failed to decode audio file. Please upload a valid .wav, .mp3, or .ogg file.'
      );
    } finally {
      setIsLoadingSample(false);
      e.target.value = '';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#121216] shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/40 bg-violet-500/15">
              <Music className="h-5 w-5 text-violet-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                {targetTrack
                  ? `Sound Library — ${targetTrack.name}`
                  : 'Studio Sound Library & Custom Sample Importer'}
              </h2>
              <p className="text-xs text-zinc-400">
                Audition synthesized & sampled instruments or import custom{' '}
                <code className="text-cyan-300">.wav</code> /{' '}
                <code className="text-cyan-300">.mp3</code> audio
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-zinc-800 bg-zinc-900 p-2 text-zinc-400 transition hover:border-zinc-700 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="studio-scrollbar flex-1 space-y-6 overflow-y-auto p-6">
          {/* Custom Sample Importer Section (Upload File or Paste URL) */}
          <div className="rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-950/25 via-zinc-900/90 to-cyan-950/20 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white">
                  Import Custom Audio Sample (.mp3 / .wav)
                </h3>
              </div>

              {targetTrack && (
                <div className="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-950 p-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setAssignMode('replace')}
                    className={`rounded-md px-2.5 py-1 font-medium transition ${
                      assignMode === 'replace'
                        ? 'bg-violet-600 text-white'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Assign to &ldquo;{targetTrack.name}&rdquo;
                  </button>
                  <button
                    type="button"
                    onClick={() => setAssignMode('new-track')}
                    className={`rounded-md px-2.5 py-1 font-medium transition ${
                      assignMode === 'new-track'
                        ? 'bg-cyan-500 text-zinc-950 font-semibold'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Create New Track
                  </button>
                </div>
              )}
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-12">
              {/* Optional Custom Track / Sample Label */}
              <div className="md:col-span-4">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                  Track / Sample Name
                </label>
                <input
                  type="text"
                  value={customTrackName}
                  onChange={(e) => setCustomTrackName(e.target.value)}
                  placeholder="e.g. Jazzy Sax Riff, Vocal Hook..."
                  className="mt-1.5 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none"
                />
              </div>

              {/* Paste Audio URL */}
              <form
                onSubmit={handleUrlSubmit}
                className="flex flex-col justify-end md:col-span-5"
              >
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                  Load Audio from URL (.wav / .mp3)
                </label>
                <div className="mt-1.5 flex gap-2">
                  <div className="relative flex-1">
                    <Link2 className="pointer-events-none absolute left-3 top-2.5 h-3.5 w-3.5 text-zinc-500" />
                    <input
                      type="url"
                      value={customUrl}
                      onChange={(e) => setCustomUrl(e.target.value)}
                      placeholder="/sounds/kick-808.wav or https://..."
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-2 pl-8 pr-3 text-xs text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoadingSample || !customUrl.trim()}
                    className="shrink-0 rounded-xl bg-cyan-500 px-3.5 py-2 text-xs font-bold text-zinc-950 transition hover:bg-cyan-400 disabled:opacity-40"
                  >
                    {isLoadingSample ? 'Loading...' : 'Load URL'}
                  </button>
                </div>
              </form>

              {/* Upload Local File */}
              <div className="flex flex-col justify-end md:col-span-3">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                  Or Upload Local File
                </label>
                <label className="mt-1.5 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-violet-500/50 bg-violet-500/10 px-3 py-2 text-xs font-semibold text-violet-200 transition hover:border-violet-400 hover:bg-violet-500/20">
                  <Upload className="h-3.5 w-3.5 text-violet-300" />
                  <span>{isLoadingSample ? 'Decoding...' : 'Upload .MP3/.WAV'}</span>
                  <input
                    type="file"
                    accept="audio/*,.wav,.mp3,.ogg,.m4a"
                    onChange={handleFileChange}
                    disabled={isLoadingSample}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {errorMessage && (
              <div className="mt-3 flex items-center gap-2 rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-300">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {['All', ...SOUND_CATEGORIES].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                    selectedCategory === cat
                      ? 'bg-violet-600 text-white shadow-[0_0_12px_rgba(139,92,246,0.4)]'
                      : 'border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="font-mono text-xs text-zinc-400">
              {filteredSounds.length} instruments available
            </span>
          </div>

          {/* Sound Grid */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSounds.map((sound) => {
              const isCurrentlySelected =
                targetTrack && targetTrack.soundId === sound.id;
              return (
                <div
                  key={sound.id}
                  className={`flex flex-col justify-between rounded-xl border p-3.5 transition ${
                    isCurrentlySelected
                      ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                      : 'border-zinc-800 bg-zinc-900/70 hover:border-zinc-700 hover:bg-zinc-900'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="inline-block rounded border border-zinc-700 bg-zinc-800 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-zinc-300">
                          {sound.category}
                        </span>
                        <h4 className="mt-1.5 text-sm font-bold text-white">
                          {sound.name}
                        </h4>
                      </div>

                      <button
                        type="button"
                        onClick={() => onPreviewSound(sound.id)}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-500/20"
                        title="Audition Sound"
                      >
                        <Volume2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">
                      {sound.description}
                    </p>
                  </div>

                  <div className="mt-3.5 flex items-center gap-2 pt-2 border-t border-zinc-800/80">
                    {targetTrack && (
                      <button
                        type="button"
                        onClick={() => {
                          onSelectSoundForTrack(targetTrack.id, sound.id);
                          onClose();
                        }}
                        className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
                          isCurrentlySelected
                            ? 'bg-cyan-500 text-zinc-950'
                            : 'bg-violet-600 text-white hover:bg-violet-500'
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                        <span>
                          {isCurrentlySelected ? 'Active on Track' : 'Use on Track'}
                        </span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        onCreateTrackWithSound(
                          sound.name,
                          sound.id,
                          sound.category
                        );
                        onClose();
                      }}
                      className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-zinc-700 bg-zinc-800 px-2.5 py-1.5 text-xs font-semibold text-zinc-200 transition hover:border-cyan-400/50 hover:text-cyan-300"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>New Track</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
