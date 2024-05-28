/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2253af',
        },
        secondary: {
          DEFAULT: '#63636c',
        },
      },
    },
  },
  plugins: [],
};
