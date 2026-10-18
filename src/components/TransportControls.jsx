import React from 'react';
import {
  Play,
  Pause,
  Square,
  Volume2,
  VolumeX,
  Plus,
  Sparkles,
  Trash2,
  Sliders,
  Disc3,
} from 'lucide-react';
import { STUDIO_PRESETS } from '../utils/audioEngine';

const STEP_LENGTH_OPTIONS = [
  { steps: 16, label: '16 Steps', sub: '1 Bar' },
  { steps: 32, label: '32 Steps', sub: '2 Bars' },
  { steps: 64, label: '64 Steps', sub: '4 Bars' },
];

export default function TransportControls({
  isPlaying,
  onTogglePlay,
  onStop,
  bpm,
  onBpmChange,
  totalSteps,
  onTotalStepsChange,
  masterVolume,
  onMasterVolumeChange,
  currentStep,
  activePreset,
  onLoadPreset,
  onRandomize,
  onClearAll,
  onOpenCustomModal,
}) {
  const currentBar = Math.floor(currentStep / 16) + 1;
  const currentBeat = Math.floor((currentStep % 16) / 4) + 1;
  const currentSixteenth = (currentStep % 4) + 1;

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-800/80 bg-[#09090b]/95 backdrop-blur-xl">
      <div className="mx-auto max-w-[1600px] px-4 py-3.5 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Brand Title & LCD Position Readout */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/40 bg-gradient-to-br from-violet-600/30 to-cyan-500/20 shadow-lg ${
                  isPlaying ? 'shadow-violet-500/25' : ''
                }`}
              >
                <Disc3
                  className={`h-6 w-6 text-violet-400 transition-transform duration-500 ${
                    isPlaying ? 'animate-spin' : ''
                  }`}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
                    THE BEATMAKER
                  </h1>
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                    Studio v2.0
                  </span>
                </div>
                <p className="text-xs text-zinc-400">
                  Web Audio API Multi-Genre Step Sequencer
                </p>
              </div>
            </div>

            {/* Digital LCD Position Display */}
            <div className="hidden items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/90 px-3 py-1.5 font-mono shadow-inner md:flex">
              <div className="text-center">
                <span className="block text-[9px] uppercase tracking-widest text-zinc-500">
                  BAR.BEAT.STEP
                </span>
                <span className="text-sm font-bold tracking-wider text-cyan-400">
                  {currentBar}.{currentBeat}.{currentSixteenth}
                </span>
              </div>
              <div className="h-6 w-px bg-zinc-800" />
              <div className="text-center min-w-[46px]">
                <span className="block text-[9px] uppercase tracking-widest text-zinc-500">
                  STEP
                </span>
                <span className="text-sm font-bold text-violet-400">
                  {String(currentStep + 1).padStart(2, '0')}/{totalSteps}
                </span>
              </div>
            </div>
          </div>

          {/* Center Transport Controls: Play/Pause, Stop, BPM, Pattern Length */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Play/Pause & Stop */}
            <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/90 p-1.5">
              <button
                type="button"
                onClick={onTogglePlay}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isPlaying
                    ? 'bg-cyan-500 text-zinc-950 shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:bg-cyan-400'
                    : 'bg-violet-600 text-white shadow-[0_0_16px_rgba(139,92,246,0.4)] hover:bg-violet-500'
                }`}
                title={isPlaying ? 'Pause Sequencer (Space)' : 'Start Sequencer (Space)'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-4 w-4 fill-current" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 fill-current" />
                    <span>Play</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onStop}
                className="flex items-center gap-1.5 rounded-lg border border-zinc-700/70 bg-zinc-800/80 px-3 py-2 text-sm font-medium text-zinc-300 transition hover:border-rose-500/40 hover:bg-rose-500/15 hover:text-rose-300"
                title="Stop and Reset to Step 1"
              >
                <Square className="h-3.5 w-3.5 fill-current" />
                <span className="hidden sm:inline">Stop</span>
              </button>
            </div>

            {/* BPM Control (60 - 180) */}
            <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/90 px-3.5 py-2">
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                    Tempo
                  </span>
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    {bpm} BPM
                  </span>
                </div>
                <input
                  type="range"
                  min={60}
                  max={180}
                  value={bpm}
                  onChange={(e) => onBpmChange(Number(e.target.value))}
                  aria-label="Tempo BPM"
                  className="mt-1 h-1.5 w-28 cursor-pointer appearance-none rounded-lg bg-zinc-700 accent-cyan-400 sm:w-32"
                />
              </div>
            </div>

            {/* Pattern Length Selector (16 / 32 / 64 steps) */}
            <div
              className="flex items-center rounded-xl border border-zinc-800 bg-zinc-900/90 p-1"
              role="group"
              aria-label="Pattern Length Selector"
            >
              {STEP_LENGTH_OPTIONS.map((opt) => {
                const active = totalSteps === opt.steps;
                return (
                  <button
                    key={opt.steps}
                    type="button"
                    onClick={() => onTotalStepsChange(opt.steps)}
                    className={`rounded-lg px-2.5 py-1.5 text-left transition-all ${
                      active
                        ? 'bg-violet-600/90 text-white shadow-[0_0_12px_rgba(139,92,246,0.45)]'
                        : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
                    }`}
                  >
                    <div className="font-mono text-xs font-bold leading-none">
                      {opt.steps}
                    </div>
                    <div className="mt-0.5 text-[10px] opacity-80">{opt.sub}</div>
                  </button>
                );
              })}
            </div>

            {/* Master Volume */}
            <div className="flex items-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-900/90 px-3 py-2">
              <button
                type="button"
                onClick={() =>
                  onMasterVolumeChange(masterVolume > 0 ? 0 : 0.85)
                }
                className="text-zinc-400 transition hover:text-cyan-400"
                title="Toggle Master Mute"
              >
                {masterVolume === 0 ? (
                  <VolumeX className="h-4 w-4 text-rose-400" />
                ) : (
                  <Volume2 className="h-4 w-4 text-cyan-400" />
                )}
              </button>
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                    Master
                  </span>
                  <span className="font-mono text-[11px] text-zinc-300">
                    {Math.round(masterVolume * 100)}%
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={masterVolume}
                  onChange={(e) => onMasterVolumeChange(Number(e.target.value))}
                  aria-label="Master Volume"
                  className="mt-1 h-1.5 w-20 cursor-pointer appearance-none rounded-lg bg-zinc-700 accent-violet-400"
                />
              </div>
            </div>
          </div>

          {/* Right Actions: Presets, Randomize, Clear, Custom Sample Upload */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Preset Selector */}
            <div className="relative flex items-center">
              <Sliders className="pointer-events-none absolute left-2.5 h-3.5 w-3.5 text-zinc-400" />
              <select
                value={activePreset}
                onChange={(e) => onLoadPreset(e.target.value)}
                aria-label="Select Studio Preset"
                className="rounded-xl border border-zinc-800 bg-zinc-900 py-2 pl-8 pr-3 text-xs font-medium text-zinc-200 transition hover:border-zinc-700 focus:border-violet-500 focus:outline-none"
              >
                {Object.entries(STUDIO_PRESETS).map(([key, preset]) => (
                  <option key={key} value={key}>
                    {preset.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={onRandomize}
              className="flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300"
              title="Generate a fresh rhythmic pattern"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Inspire</span>
            </button>

            <button
              type="button"
              onClick={onClearAll}
              className="flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-400 transition hover:border-rose-500/40 hover:bg-rose-500/10 hover:text-rose-300"
              title="Clear all active steps"
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Clear</span>
            </button>

            <button
              type="button"
              onClick={onOpenCustomModal}
              className="flex items-center gap-1.5 rounded-xl border border-violet-500/40 bg-gradient-to-r from-violet-600/25 to-cyan-600/25 px-3.5 py-2 text-xs font-semibold text-violet-200 shadow-sm transition hover:border-violet-400 hover:from-violet-600/40 hover:to-cyan-600/40 hover:text-white"
            >
              <Plus className="h-4 w-4 text-cyan-400" />
              <span>Add Sample / Sound Library</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
