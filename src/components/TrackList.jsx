import React from 'react';
import Track from './Track';
import { Music2, PlusCircle } from 'lucide-react';

export default function TrackList({
  tracks,
  totalSteps,
  currentStep,
  isPlaying,
  availableSounds,
  onToggleStep,
  onToggleMute,
  onToggleSolo,
  onVolumeChange,
  onSoundChange,
  onPreviewTrack,
  onClearTrack,
  onDeleteTrack,
  onOpenSoundModalForTrack,
  onOpenCustomModal,
  onJumpToStep,
}) {
  const anySoloActive = tracks.some((t) => t.solo);

  return (
    <section className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6">
      {/* Main Sequencer Panel with Smooth Horizontal Scrolling */}
      <div className="overflow-hidden rounded-2xl border border-zinc-800/90 bg-[#0d0d11] shadow-2xl">
        <div className="studio-scrollbar overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            {/* Sticky Top Step Ruler / Playhead Header */}
            <div className="flex items-center border-b border-zinc-800 bg-[#14141a]">
              {/* Left Header Cell matching Track Controls width */}
              <div className="sticky left-0 z-20 flex w-[280px] shrink-0 items-center justify-between border-r border-zinc-800 bg-[#14141a]/95 px-4 py-2.5 backdrop-blur-md sm:w-[320px]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
                  <Music2 className="h-3.5 w-3.5 text-violet-400" />
                  <span>Instrument Tracks ({tracks.length})</span>
                </div>
                {anySoloActive && (
                  <span className="rounded bg-amber-400/20 px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase text-amber-300">
                    Solo Active
                  </span>
                )}
              </div>

              {/* Step Numbers & Bar Markers */}
              <div className="flex items-center gap-1.5 px-4 py-2">
                {Array.from({ length: totalSteps }).map((_, stepIdx) => {
                  const isCurrent = currentStep === stepIdx;
                  const isBarStart = stepIdx > 0 && stepIdx % 16 === 0;
                  const isBeatStart =
                    stepIdx > 0 && stepIdx % 4 === 0 && !isBarStart;
                  const isDownbeat = stepIdx % 4 === 0;
                  const barNum = Math.floor(stepIdx / 16) + 1;
                  const beatNum = Math.floor((stepIdx % 16) / 4) + 1;

                  return (
                    <React.Fragment key={stepIdx}>
                      {isBarStart && (
                        <div className="mx-1.5 h-6 w-0.5 shrink-0 rounded-full bg-violet-500/40" />
                      )}
                      {isBeatStart && <div className="w-1 shrink-0" />}

                      <button
                        type="button"
                        onClick={() => onJumpToStep(stepIdx)}
                        title={`Jump to Step ${stepIdx + 1} (Bar ${barNum}, Beat ${beatNum})`}
                        className={`flex h-7 w-9 shrink-0 flex-col items-center justify-center rounded-md font-mono text-[10px] transition sm:w-10 ${
                          isCurrent
                            ? 'bg-cyan-500 font-bold text-zinc-950 shadow-[0_0_12px_rgba(6,182,212,0.7)]'
                            : isDownbeat
                            ? 'bg-zinc-800/90 font-semibold text-zinc-200 hover:bg-zinc-700'
                            : 'text-zinc-500 hover:bg-zinc-800/50 hover:text-zinc-300'
                        }`}
                      >
                        <span>
                          {isDownbeat ? `${barNum}.${beatNum}` : stepIdx + 1}
                        </span>
                      </button>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Instrument Track Rows */}
            <div className="divide-y divide-zinc-800/60">
              {tracks.map((track) => (
                <Track
                  key={track.id}
                  track={track}
                  totalSteps={totalSteps}
                  currentStep={currentStep}
                  isPlaying={isPlaying}
                  anySoloActive={anySoloActive}
                  availableSounds={availableSounds}
                  onToggleStep={onToggleStep}
                  onToggleMute={onToggleMute}
                  onToggleSolo={onToggleSolo}
                  onVolumeChange={onVolumeChange}
                  onSoundChange={onSoundChange}
                  onPreviewTrack={onPreviewTrack}
                  onClearTrack={onClearTrack}
                  onDeleteTrack={onDeleteTrack}
                  onOpenSoundModalForTrack={onOpenSoundModalForTrack}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bar inside Sequencer Panel */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 bg-[#121216] px-4 py-3 text-xs text-zinc-400">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              Active Playhead: Step {currentStep + 1} of {totalSteps}
            </span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="hidden sm:inline">
              Tip: Press <kbd className="rounded border border-zinc-700 bg-zinc-800 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200">Space</kbd> to Play/Pause, or click any track title to audition its sound.
            </span>
          </div>

          <button
            type="button"
            onClick={onOpenCustomModal}
            className="flex items-center gap-1.5 font-semibold text-violet-400 transition hover:text-cyan-300"
          >
            <PlusCircle className="h-4 w-4" />
            <span>Add Custom Instrument / Upload Audio (.wav, .mp3)</span>
          </button>
        </div>
      </div>
    </section>
  );
}
