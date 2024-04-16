/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '576px'
      },
      colors: {
        'primary-green': 'hsl(75, 94%, 57%)',
        'primary-nutmeg': 'hsl(14, 45%, 36%)',
        'primary-dark-raspberry': 'hsl(332, 51%, 32%)',
        'eggshell': 'hsl(30, 54%, 90%)',
        'light-gray': 'hsl(30, 18%, 87%)',
        'rose-white': 'hsl(330, 100%, 98%)',
        'wenge-brown': 'hsl(30, 10%, 34%)',
        'dark-charcoal': 'hsl(24, 5%, 18%)',
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'cream': 'hsl(30, 38%, 92%)',
        'very-dark-blue': 'hsl(212, 21%, 14%)',
        'dark-grayish-blue': 'hsl(228, 12%, 48%)'
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'young-serif': ['Young Serif', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif']
      }
    },
  },
  plugins: [],
}

