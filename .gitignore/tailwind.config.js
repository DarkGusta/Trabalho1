/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        rainbow: {
          "0%": { colour: "red" },
          "16.7%": { colour: "orange" },
          "33.3%": { colour: "yellow" },
          "50%": { colour: "green" },
          "66.7%": { colour: "blue" },
          "83.3%": { colour: "indigo" },
          "100%": { colour: "violet" },
        },
      },
      animation: {
        rainbow: "rainbow 2s infinite",
      },
    },
  },
  plugins: [],
};
