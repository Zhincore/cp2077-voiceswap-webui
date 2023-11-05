/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,svelte}"],
  theme: {
    extend: {
      colors: {
        zinc: {
          950: "#0f0f0f",
          1000: "#0a0a0a",
        },
      },
    },
  },
  plugins: [],
};
