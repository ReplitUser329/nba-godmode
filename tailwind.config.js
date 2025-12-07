/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00ffff",
        neonPink: "#ff00ff",
        darkBg: "#0f0f0f",
        cardBg: "rgba(255,255,255,0.05)"
      },
      fontFamily: {
        futuristic: ["'Orbitron'", "sans-serif"]
      }
    },
  },
  plugins: [],
}
