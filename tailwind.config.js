/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#05445E",
        "secondary":"#189AB4",
        "tertiary":"#75E6DA",
        "quaternary":"#D4F1F4"

      }
    },
  },
  plugins: [],
}
