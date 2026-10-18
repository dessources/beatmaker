import React from 'react';
import {
  Volume2,
  VolumeX,
  Headphones,
  Library,
  Trash2,
  RotateCcw,
} from 'lucide-react';

const COLOR_STYLES = {
  cyan: {
    bar: 'bg-cyan-400',
    badge: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30',
    padActive:
      'bg-gradient-to-br from-cyan-400 to-cyan-600 border-cyan-300 shadow-[0_0_14px_rgba(6,182,212,0.55)] text-zinc-950',
    padHit:
      'bg-white border-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.95)] scale-105',
  },
  rose: {
    bar: 'bg-rose-500',
    badge: 'text-rose-300 bg-rose-500/10 border-rose-500/30',
    padActive:
      'bg-gradient-to-br from-rose-400 to-rose-600 border-rose-300 shadow-[0_0_14px_rgba(244,63,94,0.55)] text-zinc-950',
    padHit:
      'bg-white border-rose-200 shadow-[0_0_24px_rgba(251,113,133,0.95)] scale-105',
  },
  amber: {
    bar: 'bg-amber-400',
    badge: 'text-amber-300 bg-amber-500/10 border-amber-500/30',
    padActive:
      'bg-gradient-to-br from-amber-300 to-amber-500 border-amber-200 shadow-[0_0_14px_rgba(245,158,11,0.55)] text-zinc-950',
    padHit:
      'bg-white border-amber-200 shadow-[0_0_24px_rgba(251,191,36,0.95)] scale-105',
  },
  fuchsia: {
    bar: 'bg-fuchsia-500',
    badge: 'text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-500/30',
    padActive:
      'bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 border-fuchsia-300 shadow-[0_0_14px_rgba(217,70,239,0.55)] text-zinc-950',
    padHit:
      'bg-white border-fuchsia-200 shadow-[0_0_24px_rgba(232,121,249,0.95)] scale-105',
  },
  violet: {
    bar: 'bg-violet-500',
    badge: 'text-violet-300 bg-violet-500/10 border-violet-500/30',
    padActive:
      'bg-gradient-to-br from-violet-400 to-violet-600 border-violet-300 shadow-[0_0_14px_rgba(139,92,246,0.55)] text-white',
    padHit:
      'bg-white border-violet-200 shadow-[0_0_24px_rgba(167,139,250,0.95)] scale-105',
  },
  indigo: {
    bar: 'bg-indigo-400',
    badge: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/30',
    padActive:
      'bg-gradient-to-br from-indigo-400 to-indigo-600 border-indigo-300 shadow-[0_0_14px_rgba(99,102,241,0.55)] text-white',
    padHit:
      'bg-white border-indigo-200 shadow-[0_0_24px_rgba(129,140,248,0.95)] scale-105',
  },
  pink: {
    bar: 'bg-pink-500',
    badge: 'text-pink-300 bg-pink-500/10 border-pink-500/30',
    padActive:
      'bg-gradient-to-br from-pink-400 to-pink-600 border-pink-300 shadow-[0_0_14px_rgba(236,72,153,0.55)] text-white',
    padHit:
      'bg-white border-pink-200 shadow-[0_0_24px_rgba(244,114,182,0.95)] scale-105',
  },
  emerald: {
    bar: 'bg-emerald-400',
    badge: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30',
    padActive:
      'bg-gradient-to-br from-emerald-400 to-emerald-600 border-emerald-300 shadow-[0_0_14px_rgba(16,185,129,0.55)] text-zinc-950',
    padHit:
      'bg-white border-emerald-200 shadow-[0_0_24px_rgba(52,211,153,0.95)] scale-105',
  },
  teal: {
    bar: 'bg-teal-400',
    badge: 'text-teal-300 bg-teal-500/10 border-teal-500/30',
    padActive:
      'bg-gradient-to-br from-teal-400 to-teal-600 border-teal-300 shadow-[0_0_14px_rgba(20,184,166,0.55)] text-zinc-950',
    padHit:
      'bg-white border-teal-200 shadow-[0_0_24px_rgba(45,212,191,0.95)] scale-105',
  },
  sky: {
    bar: 'bg-sky-400',
    badge: 'text-sky-300 bg-sky-500/10 border-sky-500/30',
    padActive:
      'bg-gradient-to-br from-sky-400 to-sky-600 border-sky-300 shadow-[0_0_14px_rgba(14,165,233,0.55)] text-zinc-950',
    padHit:
      'bg-white border-sky-200 shadow-[0_0_24px_rgba(56,189,248,0.95)] scale-105',
  },
};

export default function Track({
  track,
  totalSteps,
  currentStep,
  isPlaying,
  anySoloActive,
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
}) {
  const palette = COLOR_STYLES[track.color] || COLOR_STYLES.cyan;
  const isSilenced = track.muted || (anySoloActive && !track.solo);

  return (
    <div
      className={`group relative flex items-stretch border-b border-zinc-800/80 transition-colors ${
        isSilenced
          ? 'bg-zinc-950/60 opacity-60'
          : 'bg-[#121216]/90 hover:bg-[#16161d]'
      }`}
    >
      {/* Left Sticky Track Controls Column */}
      <div className="sticky left-0 z-20 flex w-[280px] shrink-0 flex-col justify-between border-r border-zinc-800 bg-[#121216]/95 p-3 backdrop-blur-md sm:w-[320px]">
        {/* Color Accent Indicator */}
        <div
          className={`absolute bottom-0 left-0 top-0 w-1 ${palette.bar}`}
        />

        {/* Top Row: Track Name, Category Badge, Mute/Solo/Preview */}
        <div className="flex items-start justify-between gap-2 pl-2">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onPreviewTrack(track)}
                className="truncate text-left text-sm font-bold text-zinc-100 transition hover:text-cyan-300"
                title="Click to audition instrument sound"
              >
                {track.name}
              </button>
              <span
                className={`shrink-0 rounded border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${palette.badge}`}
              >
                {track.category.split(' ')[0]}
              </span>
            </div>
          </div>

          {/* Mute / Solo / Clear / Delete Buttons */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => onToggleMute(track.id)}
              className={`flex h-6 w-6 items-center justify-center rounded text-[11px] font-bold transition ${
                track.muted
                  ? 'bg-rose-500 text-white shadow-[0_0_10px_rgba(244,63,94,0.5)]'
                  : 'border border-zinc-700/80 bg-zinc-800/80 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
              }`}
              title={track.muted ? 'Unmute Track' : 'Mute Track'}
            >
              M
            </button>

            <button
              type="button"
              onClick={() => onToggleSolo(track.id)}
              className={`flex h-6 w-6 items-center justify-center rounded text-[11px] font-bold transition ${
                track.solo
                  ? 'bg-amber-400 text-zinc-950 shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                  : 'border border-zinc-700/80 bg-zinc-800/80 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
              }`}
              title={track.solo ? 'Unsolo Track' : 'Solo Track'}
            >
              S
            </button>

            <button
              type="button"
              onClick={() => onClearTrack(track.id)}
              className="flex h-6 w-6 items-center justify-center rounded border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-200"
              title="Clear steps for this track"
            >
              <RotateCcw className="h-3 w-3" />
            </button>

            {track.isCustom && (
              <button
                type="button"
                onClick={() => onDeleteTrack(track.id)}
                className="flex h-6 w-6 items-center justify-center rounded border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:border-rose-500/40 hover:bg-rose-500/10 hover:text-rose-300"
                title="Remove custom track"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>

        {/* Bottom Row: Sound Selector Dropdown, Browse Modal Trigger, Volume Slider */}
        <div className="mt-2.5 flex items-center gap-2 pl-2">
          <div className="flex min-w-0 flex-1 items-center gap-1">
            <select
              value={track.soundId}
              onChange={(e) => onSoundChange(track.id, e.target.value)}
              aria-label={`${track.name} sound selector`}
              className="w-full truncate rounded-lg border border-zinc-800 bg-zinc-900/90 px-2 py-1 text-xs text-zinc-300 transition hover:border-zinc-700 focus:border-violet-500 focus:outline-none"
            >
              {availableSounds.map((sound) => (
                <option key={sound.id} value={sound.id}>
                  {sound.name}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => onOpenSoundModalForTrack(track.id)}
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:border-violet-500/50 hover:text-violet-300"
              title="Open Sound Library / Swap Sample"
            >
              <Library className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Per-Track Volume */}
          <div className="flex w-24 shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={() => onPreviewTrack(track)}
              className="text-zinc-400 transition hover:text-cyan-400"
              title="Preview sound"
            >
              {track.muted || track.volume === 0 ? (
                <VolumeX className="h-3.5 w-3.5 text-rose-400" />
              ) : (
                <Volume2 className="h-3.5 w-3.5" />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={track.volume}
              onChange={(e) =>
                onVolumeChange(track.id, Number(e.target.value))
              }
              aria-label={`${track.name} volume`}
              className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-zinc-700 accent-cyan-400"
            />
          </div>
        </div>
      </div>

      {/* Right Step Sequencer Grid */}
      <div className="flex items-center gap-1.5 px-4 py-2.5">
        {Array.from({ length: totalSteps }).map((_, stepIdx) => {
          const isActive = Boolean(track.steps[stepIdx]);
          const isCurrentColumn = currentStep === stepIdx;
          const isLiveHit = isPlaying && isCurrentColumn && isActive;
          const beatGroupIndex = Math.floor(stepIdx / 4);
          const isEvenBeatGroup = beatGroupIndex % 2 === 0;
          const isBarStart = stepIdx > 0 && stepIdx % 16 === 0;
          const isBeatStart = stepIdx > 0 && stepIdx % 4 === 0 && !isBarStart;

          return (
            <React.Fragment key={stepIdx}>
              {/* Visual divider between 16-step bars */}
              {isBarStart && (
                <div className="mx-1.5 h-10 w-0.5 shrink-0 rounded-full bg-violet-500/40" />
              )}
              {/* Subtle gap between 4-step beats */}
              {isBeatStart && <div className="w-1 shrink-0" />}

              <button
                type="button"
                onClick={() => onToggleStep(track.id, stepIdx)}
                aria-label={`${track.name} step ${stepIdx + 1}`}
                aria-pressed={isActive}
                className={`relative h-11 w-9 shrink-0 rounded-lg border transition-all duration-100 sm:w-10 ${
                  isLiveHit
                    ? palette.padHit
                    : isActive
                    ? palette.padActive
                    : isCurrentColumn
                    ? 'border-cyan-400/60 bg-zinc-800/90 shadow-[inset_0_0_12px_rgba(6,182,212,0.25)]'
                    : isEvenBeatGroup
                    ? 'border-zinc-800/90 bg-[#18181f] hover:border-zinc-700 hover:bg-zinc-800/70'
                    : 'border-zinc-800/60 bg-[#101014] hover:border-zinc-700 hover:bg-zinc-800/60'
                }`}
              >
                {/* Inner LED indicator dot */}
                <span
                  className={`mx-auto block h-1.5 w-3 rounded-full transition-all ${
                    isLiveHit
                      ? 'bg-zinc-950 scale-125'
                      : isActive
                      ? 'bg-white/90'
                      : isCurrentColumn
                      ? 'bg-cyan-400/70'
                      : 'bg-zinc-700/40'
                  }`}
                />
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
