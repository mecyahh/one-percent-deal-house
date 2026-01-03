/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.08)",
        borderGlass: "rgba(255,255,255,0.12)",
        accent: "#4f46e5"
      },
      backdropBlur: {
        glass: "12px"
      }
    }
  },
  plugins: []
};
