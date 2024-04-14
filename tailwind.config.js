/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      'mono': ['Inconsolata', 'monospace'],
      'Montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-to-br': 'linear-gradient(to bottom right, #3490dc, #7B91FF)',
      },
    },
  },
  plugins: [require("daisyui")],
}

