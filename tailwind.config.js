/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#09090b',
          panel: '#121216',
          card: '#18181b',
          border: '#27272a',
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 14px rgba(6, 182, 212, 0.55)',
        'neon-violet': '0 0 14px rgba(139, 92, 246, 0.55)',
        'neon-emerald': '0 0 14px rgba(16, 185, 129, 0.55)',
        'neon-amber': '0 0 14px rgba(245, 158, 11, 0.55)',
        'neon-rose': '0 0 14px rgba(244, 63, 94, 0.55)',
      }
    },
  },
  plugins: [],
};
