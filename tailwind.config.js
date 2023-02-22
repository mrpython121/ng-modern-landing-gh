/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "black": "#4D455D",
        "red": '#E96479',
        "yellow": "#F5E9CF",
        "teal": "#7DB9B6"
      }
    },
    fontFamily:{
      Poppins: ["Poppins, sans-serif"]
    },
    container:{
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  variants: {
    extends:{}
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
