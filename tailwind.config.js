/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0A0A14',
        accent: '#7c1dd1', // Roxo vibrante extraído da logo
        brandBlue: '#081752', // Azul marinho extraído da logo
        light: '#F0EFF4',
        graphite: '#18181B',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
