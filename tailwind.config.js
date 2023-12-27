/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        letra: ['Shadows Into Light', 'cursive'],
      },
      colors: {
        'primary-color': '#ffff',
      },
      backgroundImage: {
        'fondo-color': "url('https://www.transparenttextures.com/patterns/carbon-fibre-big.png')",
        'baner': "url('https://www.transparenttextures.com/patterns/dark-circles.png')"

      }
    },
  },
  plugins: [],
}

