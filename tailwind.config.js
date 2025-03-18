/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#B5995A",
        "bgPrime": "#25292F"
      },
      backgroundImage: {
        "sevaImg": "url('./assets/sbg1.svg')",
        "sevaImg2": "url('./assets/sbg2.svg')",
        "sevaImg3": "url('./assets/sb3.svg')",
        "sevaImg4": "url('./assets/sbg4.svg')",
      }
    },
  },
  plugins: [],
}