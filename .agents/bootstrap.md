# Project Prompt: "The Beatmaker" – React Web-Based Music Looper

You are an expert full-stack React engineer and UI/UX designer. We are building a modern, highly polished web-based music looper called **"The Beatmaker"** in React (using Vite, Tailwind CSS, and Lucide React icons).

This application will be used as a hands-on project for a university computer science club workshop. It is inspired by a vanilla JS beatmaker[cite: 1] but built from the ground up as a component-driven, feature-rich React application.

---

## 🚀 Core Features to Implement

### 1. Modern React Architecture & State Management

- Use **Vite + React** with functional components and hooks (`useState`, `useEffect`, `useCallback`, `useRef`).
- Global playback engine state: `isPlaying`, `bpm` (default: 120, range: 60-180), `currentStep` (looping through active columns), and `totalSteps` (supporting extended bars).
- Clean separation of concerns:
  - `App.js` (Orchestrator & Audio scheduler engine)
  - `TransportControls.js` (Play/Pause, Stop, BPM slider, Bar length selector, Master Volume)
  - `TrackList.js` / `Track.js` (Individual instrument rows with mute/solo, volume control, track selector, and step grid)
  - `SoundLibraryModal.js` or dropdown to swap instruments/samples.

### 2. Enhanced Instrument Tracks & Sound Diversity

Provide a rich default set of pre-configured tracks spanning classical, electronic, and modern styles using Web Audio API synthesized sounds or reliable base64/audio samples:

- **Drums / Percussion:** Kick, Snare, Hi-Hat (Closed/Open), Clap.
- **Modern / Electronic:** 808 Sub Bass, Synth Lead, Vocal Chop FX.
- **Classical / Acoustic:** Piano Chord/Stab, Violin Pizzicato, Flute note.
- **Custom Sample Support:** Allow users to paste a URL or upload a custom `.mp3`/`.wav` audio file to create a brand new custom track on the fly using `AudioContext` and `AudioBufferSourceNode`.

### 3. Extended Beats & Horizontal Scrolling

- Support flexible pattern lengths: **16 steps (1 bar), 32 steps (2 bars), or 64 steps (4 bars)**.
- Wrap the step grid in a responsive container with smooth horizontal scrolling (`overflow-x-auto`) so users can build longer, complex beats without crowding the screen.
- Visually highlight the currently playing column (`currentStep`) across all tracks in real-time.

### 4. Audio Engine Implementation

- Use the native browser **Web Audio API** (`AudioContext`) to ensure ultra-low latency timing playback synced precisely to the BPM clock (using `setInterval` or `requestAnimationFrame` delta timing).
- Ensure audio context initializes cleanly on user interaction (to bypass browser autoplay policies).

---

## 🎨 UI & Styling Requirements (Tailwind CSS)

- **Dark Mode Aesthetic:** Sleek, modern music production studio look (deep slate/zinc backgrounds like `#09090b`, neon accents like violet/cyan for active steps, smooth hover states).
- **Interactive Grids:** Active steps glow with color; inactive steps look clean and recessed.
- **Responsive Layout:** Clean controls that adapt well to desktop screens and large tablets.

---

## 📂 Deliverables Expected

Please provide:

1. The full directory structure and file setup for Vite + React.
2. Complete, functional code for the core components (`App.jsx`, `TransportControls.jsx`, `Track.jsx`, and an audio utility helper).
3. Instructions on how to run it locally (`npm install`, `npm run dev`).
