// Web Audio API Synthesizer & Sample Engine for "The Beatmaker"

export const SOUND_CATEGORIES = [
  'Drums / Percussion',
  'Modern / Electronic',
  'Classical / Acoustic',
  'Custom Samples',
];

export const SOUND_LIBRARY = [
  // ================= DRUMS / PERCUSSION =================
  {
    id: 'kick-classic',
    name: 'Classic Studio Kick',
    category: 'Drums / Percussion',
    instrumentGroup: 'Kick',
    type: 'sample',
    url: '/sounds/kick-classic.wav',
    fallbackSynth: 'kick-punch',
    description: 'Tight, punchy studio kick drum sample',
  },
  {
    id: 'kick-808',
    name: '808 Boom Kick',
    category: 'Drums / Percussion',
    instrumentGroup: 'Kick',
    type: 'sample',
    url: '/sounds/kick-808.wav',
    fallbackSynth: 'kick-punch',
    description: 'Deep TR-808 style bass drum sample',
  },
  {
    id: 'kick-heavy',
    name: 'Heavy Club Kick',
    category: 'Drums / Percussion',
    instrumentGroup: 'Kick',
    type: 'sample',
    url: '/sounds/kick-heavy.wav',
    fallbackSynth: 'kick-punch',
    description: 'Hard-hitting electronic kick sample',
  },
  {
    id: 'kick-softy',
    name: 'Lo-Fi Warm Kick',
    category: 'Drums / Percussion',
    instrumentGroup: 'Kick',
    type: 'sample',
    url: '/sounds/kick-softy.wav',
    fallbackSynth: 'kick-punch',
    description: 'Soft, dusty vintage kick sample',
  },
  {
    id: 'synth-kick',
    name: 'Analog Synth Kick',
    category: 'Drums / Percussion',
    instrumentGroup: 'Kick',
    type: 'synth',
    synthPreset: 'kick-punch',
    description: 'Web Audio synthesized analog pitch-envelope kick',
  },

  // Snares
  {
    id: 'snare-acoustic',
    name: 'Classic Acoustic Snare',
    category: 'Drums / Percussion',
    instrumentGroup: 'Snare',
    type: 'sample',
    url: '/sounds/snare-acoustic01.wav',
    fallbackSynth: 'snare-crisp',
    description: 'Crisp live studio snare drum sample',
  },
  {
    id: 'snare-808',
    name: '808 Snare',
    category: 'Drums / Percussion',
    instrumentGroup: 'Snare',
    type: 'sample',
    url: '/sounds/snare-808.wav',
    fallbackSynth: 'snare-crisp',
    description: 'Classic analog 808 snare hit',
  },
  {
    id: 'snare-vinyl',
    name: 'Vinyl Crackle Snare',
    category: 'Drums / Percussion',
    instrumentGroup: 'Snare',
    type: 'sample',
    url: '/sounds/snare-vinyl02.wav',
    fallbackSynth: 'snare-crisp',
    description: 'Gritty vinyl-sampled hip-hop snare',
  },
  {
    id: 'synth-snare',
    name: 'Synthesized Studio Snare',
    category: 'Drums / Percussion',
    instrumentGroup: 'Snare',
    type: 'synth',
    synthPreset: 'snare-crisp',
    description: 'Dual-membrane + bandpass noise burst snare',
  },

  // Hi-Hats (Closed / Open)
  {
    id: 'hihat-closed-sample',
    name: 'Acoustic Closed Hi-Hat',
    category: 'Drums / Percussion',
    instrumentGroup: 'Hi-Hat',
    type: 'sample',
    url: '/sounds/hihat-acoustic01.wav',
    fallbackSynth: 'hihat-closed',
    description: 'Natural acoustic closed hi-hat sample',
  },
  {
    id: 'hihat-808-sample',
    name: '808 Metallic Hi-Hat',
    category: 'Drums / Percussion',
    instrumentGroup: 'Hi-Hat',
    type: 'sample',
    url: '/sounds/hihat-808.wav',
    fallbackSynth: 'hihat-closed',
    description: 'Crisp 808 closed hi-hat sample',
  },
  {
    id: 'synth-hihat-closed',
    name: 'Crisp Closed Hi-Hat (Synth)',
    category: 'Drums / Percussion',
    instrumentGroup: 'Hi-Hat',
    type: 'synth',
    synthPreset: 'hihat-closed',
    description: 'Tight high-frequency metallic closed hat',
  },
  {
    id: 'synth-hihat-open',
    name: 'Shimmer Open Hi-Hat (Synth)',
    category: 'Drums / Percussion',
    instrumentGroup: 'Hi-Hat',
    type: 'synth',
    synthPreset: 'hihat-open',
    description: 'Sustained metallic open cymbal decay',
  },

  // Claps
  {
    id: 'synth-clap',
    name: 'Studio 909 Handclap',
    category: 'Drums / Percussion',
    instrumentGroup: 'Clap',
    type: 'synth',
    synthPreset: 'clap-studio',
    description: 'Multi-transient layered stereo handclap',
  },
  {
    id: 'synth-rimshot',
    name: 'Tight Rimshot / Clave',
    category: 'Drums / Percussion',
    instrumentGroup: 'Clap',
    type: 'synth',
    synthPreset: 'rimshot',
    description: 'Woody resonant percussion click',
  },

  // ================= MODERN / ELECTRONIC =================
  // 808 Sub Bass
  {
    id: 'synth-808-sub',
    name: '808 Sub Bass (C1 Glide)',
    category: 'Modern / Electronic',
    instrumentGroup: '808 Sub Bass',
    type: 'synth',
    synthPreset: '808-sub-c',
    description: 'Deep sub-bass sine/triangle with pitch glide & warm saturation',
  },
  {
    id: 'synth-808-fifth',
    name: '808 Sub Bass (G1 Punch)',
    category: 'Modern / Electronic',
    instrumentGroup: '808 Sub Bass',
    type: 'synth',
    synthPreset: '808-sub-g',
    description: 'Higher fifth 808 bass note for melodic basslines',
  },
  {
    id: 'synth-reese-bass',
    name: 'Neuro Reese Bass',
    category: 'Modern / Electronic',
    instrumentGroup: '808 Sub Bass',
    type: 'synth',
    synthPreset: 'reese-bass',
    description: 'Detuned dual-saw lowpass filtered sub bass',
  },

  // Synth Lead
  {
    id: 'synth-lead-pluck',
    name: 'Neon Cyberpunk Lead',
    category: 'Modern / Electronic',
    instrumentGroup: 'Synth Lead',
    type: 'synth',
    synthPreset: 'synth-lead-neon',
    description: 'Detuned sawtooth lead with resonant filter envelope',
  },
  {
    id: 'synth-lead-arp',
    name: 'Crystal FM Pluck',
    category: 'Modern / Electronic',
    instrumentGroup: 'Synth Lead',
    type: 'synth',
    synthPreset: 'synth-lead-fm',
    description: 'Glassy FM bell-lead pluck in C minor pentatonic',
  },

  // Vocal Chop FX
  {
    id: 'synth-vocal-ah',
    name: 'Vocal Chop FX ("Ah")',
    category: 'Modern / Electronic',
    instrumentGroup: 'Vocal Chop FX',
    type: 'synth',
    synthPreset: 'vocal-chop-ah',
    description: 'Dual-formant filtered vocal synth chop with pitch scoop',
  },
  {
    id: 'synth-vocal-oh',
    name: 'Vocal Chop FX ("Oh" High)',
    category: 'Modern / Electronic',
    instrumentGroup: 'Vocal Chop FX',
    type: 'synth',
    synthPreset: 'vocal-chop-oh',
    description: 'Bright pitched vocal chop harmony',
  },

  // ================= CLASSICAL / ACOUSTIC =================
  // Piano Chord/Stab
  {
    id: 'synth-piano-cm9',
    name: 'Grand Piano Chord (Cm9)',
    category: 'Classical / Acoustic',
    instrumentGroup: 'Piano Chord/Stab',
    type: 'synth',
    synthPreset: 'piano-chord-cm9',
    description: 'Rich 4-voice C Minor 9th acoustic piano stab with hammer transient',
  },
  {
    id: 'synth-piano-fmaj7',
    name: 'Warm Piano Stab (AbMaj7)',
    category: 'Classical / Acoustic',
    instrumentGroup: 'Piano Chord/Stab',
    type: 'synth',
    synthPreset: 'piano-chord-abmaj7',
    description: 'Lush Ab Major 7th chord voicing for emotional progressions',
  },

  // Violin Pizzicato
  {
    id: 'synth-violin-pizz',
    name: 'Chamber Violin Pizzicato',
    category: 'Classical / Acoustic',
    instrumentGroup: 'Violin Pizzicato',
    type: 'synth',
    synthPreset: 'violin-pizz-g4',
    description: 'Plucked orchestral violin string with woody body resonance',
  },
  {
    id: 'synth-cello-pizz',
    name: 'Orchestral Spiccato Strings',
    category: 'Classical / Acoustic',
    instrumentGroup: 'Violin Pizzicato',
    type: 'synth',
    synthPreset: 'violin-pizz-c5',
    description: 'Bright high octave plucked string ensemble',
  },

  // Flute Note
  {
    id: 'synth-flute-c5',
    name: 'Concert Flute (Eb5)',
    category: 'Classical / Acoustic',
    instrumentGroup: 'Flute Note',
    type: 'synth',
    synthPreset: 'flute-eb5',
    description: 'Breathy acoustic flute note with gentle vibrato and chiff transient',
  },
  {
    id: 'synth-flute-g5',
    name: 'Alto Flute Harmonic (G5)',
    category: 'Classical / Acoustic',
    instrumentGroup: 'Flute Note',
    type: 'synth',
    synthPreset: 'flute-g5',
    description: 'Soaring upper-register concert flute motif',
  },
];

// Helper to create a 64-step boolean array from an initial 16-step pattern tiled 4x
export function createPatternFrom16(steps16) {
  const full = new Array(64).fill(false);
  for (let i = 0; i < 64; i++) {
    full[i] = Boolean(steps16[i % 16]);
  }
  return full;
}

export const INITIAL_TRACKS = [
  {
    id: 'track-kick',
    name: 'Kick',
    category: 'Drums / Percussion',
    soundId: 'kick-classic',
    color: 'cyan',
    volume: 0.9,
    muted: false,
    solo: false,
    steps: createPatternFrom16([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0]),
  },
  {
    id: 'track-snare',
    name: 'Snare',
    category: 'Drums / Percussion',
    soundId: 'snare-acoustic',
    color: 'rose',
    volume: 0.85,
    muted: false,
    solo: false,
    steps: createPatternFrom16([0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]),
  },
  {
    id: 'track-hihat',
    name: 'Hi-Hat (Closed/Open)',
    category: 'Drums / Percussion',
    soundId: 'hihat-closed-sample',
    color: 'amber',
    volume: 0.7,
    muted: false,
    solo: false,
    steps: createPatternFrom16([1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1]),
  },
  {
    id: 'track-clap',
    name: 'Clap',
    category: 'Drums / Percussion',
    soundId: 'synth-clap',
    color: 'fuchsia',
    volume: 0.75,
    muted: false,
    solo: false,
    steps: createPatternFrom16([0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1]),
  },
  {
    id: 'track-808',
    name: '808 Sub Bass',
    category: 'Modern / Electronic',
    soundId: 'synth-808-sub',
    color: 'violet',
    volume: 0.88,
    muted: false,
    solo: false,
    steps: createPatternFrom16([1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0]),
  },
  {
    id: 'track-synth-lead',
    name: 'Synth Lead',
    category: 'Modern / Electronic',
    soundId: 'synth-lead-pluck',
    color: 'indigo',
    volume: 0.68,
    muted: false,
    solo: false,
    steps: createPatternFrom16([0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0]),
  },
  {
    id: 'track-vocal-chop',
    name: 'Vocal Chop FX',
    category: 'Modern / Electronic',
    soundId: 'synth-vocal-ah',
    color: 'pink',
    volume: 0.65,
    muted: false,
    solo: false,
    steps: createPatternFrom16([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0]),
  },
  {
    id: 'track-piano',
    name: 'Piano Chord/Stab',
    category: 'Classical / Acoustic',
    soundId: 'synth-piano-cm9',
    color: 'emerald',
    volume: 0.75,
    muted: false,
    solo: false,
    steps: createPatternFrom16([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
  },
  {
    id: 'track-violin',
    name: 'Violin Pizzicato',
    category: 'Classical / Acoustic',
    soundId: 'synth-violin-pizz',
    color: 'teal',
    volume: 0.72,
    muted: false,
    solo: false,
    steps: createPatternFrom16([0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]),
  },
  {
    id: 'track-flute',
    name: 'Flute Note',
    category: 'Classical / Acoustic',
    soundId: 'synth-flute-c5',
    color: 'sky',
    volume: 0.65,
    muted: false,
    solo: false,
    steps: createPatternFrom16([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]),
  },
];

export const STUDIO_PRESETS = {
  'symphonic-trap': {
    name: 'Symphonic Beats (Default)',
    bpm: 120,
    patterns: {
      'track-kick': [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      'track-snare': [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      'track-hihat': [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
      'track-clap': [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
      'track-808': [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      'track-synth-lead': [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      'track-vocal-chop': [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      'track-piano': [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'track-violin': [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
      'track-flute': [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    },
  },
  'cyber-house': {
    name: 'Neon Cyber House',
    bpm: 128,
    patterns: {
      'track-kick': [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      'track-snare': [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      'track-hihat': [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
      'track-clap': [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      'track-808': [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
      'track-synth-lead': [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
      'track-vocal-chop': [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
      'track-piano': [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
      'track-violin': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'track-flute': [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    },
  },
  'chamber-lofi': {
    name: 'Classical Lo-Fi Study',
    bpm: 92,
    patterns: {
      'track-kick': [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
      'track-snare': [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      'track-hihat': [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      'track-clap': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      'track-808': [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      'track-synth-lead': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'track-vocal-chop': [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'track-piano': [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      'track-violin': [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
      'track-flute': [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    },
  },
};

class WebAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.compressor = null;
    this.noiseBuffer = null;
    this.sampleBuffers = new Map(); // soundId -> AudioBuffer
    this.customSounds = new Map();  // soundId -> sound metadata object
    this.loadingPromises = new Map();
    this.masterVolume = 0.85;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      // Studio dynamics compressor to glue the mix and prevent clipping
      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-10, this.ctx.currentTime);
      this.compressor.knee.setValueAtTime(12, this.ctx.currentTime);
      this.compressor.ratio.setValueAtTime(4, this.ctx.currentTime);
      this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
      this.compressor.release.setValueAtTime(0.15, this.ctx.currentTime);

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);

      this.compressor.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);

      this.noiseBuffer = this.createNoiseBuffer();
      this.preloadDefaultSamples();
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  setMasterVolume(value) {
    this.masterVolume = Math.max(0, Math.min(1, value));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.masterVolume, this.ctx.currentTime, 0.015);
    }
  }

  createNoiseBuffer() {
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  async preloadDefaultSamples() {
    const sampleSounds = SOUND_LIBRARY.filter((s) => s.type === 'sample' && s.url);
    await Promise.allSettled(
      sampleSounds.map((sound) => this.loadSampleFromUrl(sound.id, sound.url))
    );
  }

  async loadSampleFromUrl(soundId, url) {
    this.init();
    if (this.sampleBuffers.has(soundId)) {
      return this.sampleBuffers.get(soundId);
    }
    if (this.loadingPromises.has(soundId)) {
      return this.loadingPromises.get(soundId);
    }

    const promise = (async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch audio at ${url} (${response.status})`);
      }
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await this.ctx.decodeAudioData(arrayBuffer);
      this.sampleBuffers.set(soundId, audioBuffer);
      this.loadingPromises.delete(soundId);
      return audioBuffer;
    })();

    this.loadingPromises.set(soundId, promise);
    try {
      return await promise;
    } catch (err) {
      this.loadingPromises.delete(soundId);
      throw err;
    }
  }

  async registerCustomSoundFromUrl(name, url) {
    this.init();
    const soundId = `custom-url-${Date.now()}`;
    const audioBuffer = await this.loadSampleFromUrl(soundId, url);
    const customSound = {
      id: soundId,
      name: name || 'Custom URL Sample',
      category: 'Custom Samples',
      instrumentGroup: 'Custom',
      type: 'custom',
      url,
      duration: audioBuffer.duration,
      description: `Loaded from URL (${audioBuffer.duration.toFixed(2)}s)`,
    };
    this.customSounds.set(soundId, customSound);
    return customSound;
  }

  async registerCustomSoundFromFile(file) {
    this.init();
    const soundId = `custom-file-${Date.now()}`;
    const arrayBuffer = await file.arrayBuffer();
    const audioBuffer = await this.ctx.decodeAudioData(arrayBuffer);
    this.sampleBuffers.set(soundId, audioBuffer);

    const cleanName = file.name.replace(/\.[^/.]+$/, '');
    const customSound = {
      id: soundId,
      name: cleanName || 'Uploaded Sample',
      category: 'Custom Samples',
      instrumentGroup: 'Custom',
      type: 'custom',
      duration: audioBuffer.duration,
      description: `Local file: ${file.name} (${audioBuffer.duration.toFixed(2)}s)`,
    };
    this.customSounds.set(soundId, customSound);
    return customSound;
  }

  getAllSounds() {
    return [...SOUND_LIBRARY, ...Array.from(this.customSounds.values())];
  }

  getSoundById(soundId) {
    return (
      this.customSounds.get(soundId) ||
      SOUND_LIBRARY.find((s) => s.id === soundId) ||
      SOUND_LIBRARY[0]
    );
  }

  playSound(soundId, trackVolume = 0.85, stepIndex = 0) {
    this.init();
    const now = this.ctx.currentTime;
    const gain = Math.max(0, Math.min(1.2, trackVolume));
    if (gain <= 0.001) return;

    const sound = this.getSoundById(soundId);

    // If it's a sample or custom buffer and already decoded, play via AudioBufferSourceNode
    if (sound.type === 'sample' || sound.type === 'custom') {
      const buffer = this.sampleBuffers.get(sound.id);
      if (buffer) {
        this.playBuffer(buffer, gain, now);
        return;
      }
      // Trigger async load if not yet cached, and play fallback synth immediately for zero-latency
      if (sound.url) {
        this.loadSampleFromUrl(sound.id, sound.url).catch(() => {});
      }
      if (sound.fallbackSynth) {
        this.triggerSynth(sound.fallbackSynth, gain, now, stepIndex);
      }
      return;
    }

    // Otherwise synthesize with Web Audio API
    this.triggerSynth(sound.synthPreset, gain, now, stepIndex);
  }

  playBuffer(buffer, volume, time) {
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;

    const gainNode = this.ctx.createGain();
    gainNode.gain.setValueAtTime(volume, time);

    source.connect(gainNode);
    gainNode.connect(this.compressor);
    source.start(time);
  }

  triggerSynth(preset, volume, time, stepIndex = 0) {
    switch (preset) {
      case 'kick-punch':
        this.synthKick(volume, time);
        break;
      case 'snare-crisp':
        this.synthSnare(volume, time);
        break;
      case 'hihat-closed':
        this.synthHiHat(volume, time, 0.055);
        break;
      case 'hihat-open':
        this.synthHiHat(volume, time, 0.34);
        break;
      case 'clap-studio':
        this.synthClap(volume, time);
        break;
      case 'rimshot':
        this.synthRimshot(volume, time);
        break;
      case '808-sub-c':
        this.synth808Sub(volume, time, 65.41); // C2 -> C1 glide
        break;
      case '808-sub-g':
        this.synth808Sub(volume, time, 98.0); // G2 -> G1 glide
        break;
      case 'reese-bass':
        this.synthReeseBass(volume, time, stepIndex);
        break;
      case 'synth-lead-neon':
        this.synthNeonLead(volume, time, stepIndex);
        break;
      case 'synth-lead-fm':
        this.synthFMPluck(volume, time, stepIndex);
        break;
      case 'vocal-chop-ah':
        this.synthVocalChop(volume, time, 'ah', stepIndex);
        break;
      case 'vocal-chop-oh':
        this.synthVocalChop(volume, time, 'oh', stepIndex);
        break;
      case 'piano-chord-cm9':
        this.synthPianoChord(volume, time, [261.63, 311.13, 392.0, 466.16, 587.33]); // Cm9
        break;
      case 'piano-chord-abmaj7':
        this.synthPianoChord(volume, time, [207.65, 261.63, 311.13, 392.0]); // AbMaj7
        break;
      case 'violin-pizz-g4':
        this.synthViolinPizzicato(volume, time, 392.0, stepIndex);
        break;
      case 'violin-pizz-c5':
        this.synthViolinPizzicato(volume, time, 523.25, stepIndex);
        break;
      case 'flute-eb5':
        this.synthFlute(volume, time, 622.25, stepIndex);
        break;
      case 'flute-g5':
        this.synthFlute(volume, time, 783.99, stepIndex);
        break;
      default:
        this.synthKick(volume, time);
    }
  }

  // 1. Kick Drum Synthesis
  synthKick(volume, time) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(155, time);
    osc.frequency.exponentialRampToValueAtTime(42, time + 0.08);
    osc.frequency.exponentialRampToValueAtTime(28, time + 0.35);

    gain.gain.setValueAtTime(volume * 1.1, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.38);

    osc.connect(gain);
    gain.connect(this.compressor);

    osc.start(time);
    osc.stop(time + 0.4);
  }

  // 2. Snare Drum Synthesis
  synthSnare(volume, time) {
    // Tonal body
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(210, time);
    osc.frequency.exponentialRampToValueAtTime(110, time + 0.08);

    oscGain.gain.setValueAtTime(volume * 0.65, time);
    oscGain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);

    osc.connect(oscGain);
    oscGain.connect(this.compressor);
    osc.start(time);
    osc.stop(time + 0.13);

    // Snare wires noise
    const noise = this.ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1100, time);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(volume * 0.75, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.compressor);

    noise.start(time);
    noise.stop(time + 0.24);
  }

  // 3. Hi-Hat (Closed / Open)
  synthHiHat(volume, time, duration = 0.06) {
    const noise = this.ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;

    const bandpass = this.ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(9500, time);
    bandpass.Q.setValueAtTime(1.4, time);

    const highpass = this.ctx.createBiquadFilter();
    highpass.type = 'highpass';
    highpass.frequency.setValueAtTime(6500, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume * 0.55, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    noise.connect(bandpass);
    bandpass.connect(highpass);
    highpass.connect(gain);
    gain.connect(this.compressor);

    noise.start(time);
    noise.stop(time + duration + 0.02);
  }

  // 4. Multi-Burst Studio Handclap
  synthClap(volume, time) {
    const burstOffsets = [0, 0.011, 0.022, 0.034];
    burstOffsets.forEach((offset, idx) => {
      const noise = this.ctx.createBufferSource();
      noise.buffer = this.noiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1350, time + offset);
      filter.Q.setValueAtTime(2.2, time + offset);

      const gain = this.ctx.createGain();
      const isTail = idx === burstOffsets.length - 1;
      const decay = isTail ? 0.22 : 0.018;

      gain.gain.setValueAtTime(volume * 0.75, time + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, time + offset + decay);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.compressor);

      noise.start(time + offset);
      noise.stop(time + offset + decay + 0.01);
    });
  }

  synthRimshot(volume, time) {
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(480, time);
    osc.frequency.exponentialRampToValueAtTime(190, time + 0.03);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1600, time);
    filter.Q.setValueAtTime(4.0, time);

    gain.gain.setValueAtTime(volume * 0.8, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.065);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.compressor);

    osc.start(time);
    osc.stop(time + 0.075);
  }

  // 5. 808 Sub Bass
  synth808Sub(volume, time, startFreq = 65.41) {
    const subOsc = this.ctx.createOscillator();
    const harmOsc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    subOsc.type = 'sine';
    harmOsc.type = 'triangle';

    // Pitch drop glide for authentic 808 knock
    subOsc.frequency.setValueAtTime(startFreq * 2.2, time);
    subOsc.frequency.exponentialRampToValueAtTime(startFreq, time + 0.045);
    subOsc.frequency.exponentialRampToValueAtTime(startFreq * 0.75, time + 0.65);

    harmOsc.frequency.setValueAtTime(startFreq * 2.2, time);
    harmOsc.frequency.exponentialRampToValueAtTime(startFreq, time + 0.045);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(240, time);

    const harmGain = this.ctx.createGain();
    harmGain.gain.setValueAtTime(0.32, time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(volume * 0.95, time + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.68);

    subOsc.connect(gain);
    harmOsc.connect(filter);
    filter.connect(harmGain);
    harmGain.connect(gain);
    gain.connect(this.compressor);

    subOsc.start(time);
    harmOsc.start(time);
    subOsc.stop(time + 0.7);
    harmOsc.stop(time + 0.7);
  }

  synthReeseBass(volume, time, stepIndex = 0) {
    const notes = [65.41, 65.41, 77.78, 58.27]; // C2, C2, Eb2, Bb1
    const baseFreq = notes[Math.floor(stepIndex / 4) % notes.length];

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';
    osc1.frequency.setValueAtTime(baseFreq, time);
    osc2.frequency.setValueAtTime(baseFreq * 1.009, time); // Rich chorus detune

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(520, time);
    filter.frequency.exponentialRampToValueAtTime(140, time + 0.35);
    filter.Q.setValueAtTime(3.5, time);

    gain.gain.setValueAtTime(volume * 0.55, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.38);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.compressor);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + 0.4);
    osc2.stop(time + 0.4);
  }

  // 6. Synth Lead (Melodic C-minor pentatonic progression across steps)
  synthNeonLead(volume, time, stepIndex = 0) {
    const scale = [523.25, 622.25, 698.46, 783.99, 932.33, 783.99, 622.25, 587.33]; // C5, Eb5, F5, G5, Bb5...
    const freq = scale[stepIndex % scale.length];

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'square';
    osc1.frequency.setValueAtTime(freq, time);
    osc2.frequency.setValueAtTime(freq * 1.006, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(3600, time);
    filter.frequency.exponentialRampToValueAtTime(480, time + 0.24);
    filter.Q.setValueAtTime(4.2, time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(volume * 0.45, time + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.28);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.compressor);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + 0.3);
    osc2.stop(time + 0.3);
  }

  synthFMPluck(volume, time, stepIndex = 0) {
    const scale = [523.25, 783.99, 622.25, 932.33, 698.46, 1046.5];
    const carrierFreq = scale[stepIndex % scale.length];

    const carrier = this.ctx.createOscillator();
    const modulator = this.ctx.createOscillator();
    const modGain = this.ctx.createGain();
    const outGain = this.ctx.createGain();

    carrier.type = 'sine';
    modulator.type = 'sine';
    carrier.frequency.setValueAtTime(carrierFreq, time);
    modulator.frequency.setValueAtTime(carrierFreq * 2, time);

    modGain.gain.setValueAtTime(carrierFreq * 1.8, time);
    modGain.gain.exponentialRampToValueAtTime(1, time + 0.18);

    outGain.gain.setValueAtTime(volume * 0.55, time);
    outGain.gain.exponentialRampToValueAtTime(0.001, time + 0.32);

    modulator.connect(modGain);
    modGain.connect(carrier.frequency);
    carrier.connect(outGain);
    outGain.connect(this.compressor);

    carrier.start(time);
    modulator.start(time);
    carrier.stop(time + 0.34);
    modulator.stop(time + 0.34);
  }

  // 7. Vocal Chop FX (Dual-Formant Filter Synthesis)
  synthVocalChop(volume, time, vowel = 'ah', stepIndex = 0) {
    const pitches = [311.13, 392.0, 466.16, 523.25]; // Eb4, G4, Bb4, C5
    const baseFreq = pitches[stepIndex % pitches.length];

    const source = this.ctx.createOscillator();
    source.type = 'sawtooth';
    // Expressive vocal pitch scoop
    source.frequency.setValueAtTime(baseFreq * 0.92, time);
    source.frequency.exponentialRampToValueAtTime(baseFreq, time + 0.045);

    // Formant frequencies for "Ah" vs "Oh"
    const f1Freq = vowel === 'ah' ? 750 : 480;
    const f2Freq = vowel === 'ah' ? 1250 : 920;

    const formant1 = this.ctx.createBiquadFilter();
    formant1.type = 'bandpass';
    formant1.frequency.setValueAtTime(f1Freq, time);
    formant1.Q.setValueAtTime(5.5, time);

    const formant2 = this.ctx.createBiquadFilter();
    formant2.type = 'bandpass';
    formant2.frequency.setValueAtTime(f2Freq, time);
    formant2.Q.setValueAtTime(6.5, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(volume * 0.85, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.28);

    source.connect(formant1);
    source.connect(formant2);
    formant1.connect(gain);
    formant2.connect(gain);
    gain.connect(this.compressor);

    source.start(time);
    source.stop(time + 0.3);
  }

  // 8. Classical / Acoustic Piano Chord Stab
  synthPianoChord(volume, time, frequencies) {
    const masterChordGain = this.ctx.createGain();
    const warmthFilter = this.ctx.createBiquadFilter();

    warmthFilter.type = 'lowpass';
    warmthFilter.frequency.setValueAtTime(2800, time);
    warmthFilter.frequency.exponentialRampToValueAtTime(750, time + 0.55);

    masterChordGain.gain.setValueAtTime(0.001, time);
    masterChordGain.gain.linearRampToValueAtTime(volume * 0.32, time + 0.008);
    masterChordGain.gain.exponentialRampToValueAtTime(0.001, time + 0.65);

    warmthFilter.connect(masterChordGain);
    masterChordGain.connect(this.compressor);

    frequencies.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const overtone = this.ctx.createOscillator();
      const overtoneGain = this.ctx.createGain();

      osc.type = 'triangle';
      overtone.type = 'sine';

      // Slight strum humanization across chord notes
      const noteStart = time + i * 0.004;
      osc.frequency.setValueAtTime(freq, noteStart);
      overtone.frequency.setValueAtTime(freq * 2, noteStart);

      overtoneGain.gain.setValueAtTime(0.25, noteStart);
      overtoneGain.gain.exponentialRampToValueAtTime(0.01, noteStart + 0.2);

      osc.connect(warmthFilter);
      overtone.connect(overtoneGain);
      overtoneGain.connect(warmthFilter);

      osc.start(noteStart);
      overtone.start(noteStart);
      osc.stop(noteStart + 0.68);
      overtone.stop(noteStart + 0.68);
    });
  }

  // 9. Violin Pizzicato (Plucked Orchestral String)
  synthViolinPizzicato(volume, time, baseFreq = 392.0, stepIndex = 0) {
    const motif = [1, 1.2, 1.5, 1.25]; // G4, Bb4, D5, B4 intervals
    const freq = baseFreq * motif[stepIndex % motif.length];

    const osc = this.ctx.createOscillator();
    const bodyFilter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    // Plucked string lowpass envelope
    bodyFilter.type = 'lowpass';
    bodyFilter.frequency.setValueAtTime(2400, time);
    bodyFilter.frequency.exponentialRampToValueAtTime(420, time + 0.14);
    bodyFilter.Q.setValueAtTime(2.4, time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(volume * 0.65, time + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.19);

    osc.connect(bodyFilter);
    bodyFilter.connect(gain);
    gain.connect(this.compressor);

    osc.start(time);
    osc.stop(time + 0.21);
  }

  // 10. Concert Flute Note (Airy Sine + Vibrato + Breath Chiff)
  synthFlute(volume, time, baseFreq = 622.25, stepIndex = 0) {
    const melody = [1, 1.125, 1.2, 1];
    const freq = baseFreq * melody[Math.floor(stepIndex / 4) % melody.length];

    const osc = this.ctx.createOscillator();
    const vibrato = this.ctx.createOscillator();
    const vibratoGain = this.ctx.createGain();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    // Subtle 5.5Hz concert flute vibrato
    vibrato.frequency.setValueAtTime(5.5, time);
    vibratoGain.gain.setValueAtTime(4.5, time);
    vibrato.connect(vibratoGain);
    vibratoGain.connect(osc.frequency);

    // Soft breathy attack envelope
    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(volume * 0.55, time + 0.045);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.42);

    // Subtle breath chiff noise
    const breath = this.ctx.createBufferSource();
    breath.buffer = this.noiseBuffer;
    const breathFilter = this.ctx.createBiquadFilter();
    breathFilter.type = 'bandpass';
    breathFilter.frequency.setValueAtTime(2200, time);
    breathFilter.Q.setValueAtTime(3.0, time);

    const breathGain = this.ctx.createGain();
    breathGain.gain.setValueAtTime(volume * 0.12, time);
    breathGain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);

    breath.connect(breathFilter);
    breathFilter.connect(breathGain);
    breathGain.connect(this.compressor);

    osc.connect(gain);
    gain.connect(this.compressor);

    osc.start(time);
    vibrato.start(time);
    breath.start(time);
    osc.stop(time + 0.44);
    vibrato.stop(time + 0.44);
    breath.stop(time + 0.15);
  }
}

export const audioEngine = new WebAudioEngine();
