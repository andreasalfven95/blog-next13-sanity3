/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        primary: '#063442',
        secondary: '#51CEBC',
        light: '#fff',
        dark: '#000',
      },
      fontFamily: {
        lato: "'Lato', sans-serif",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
