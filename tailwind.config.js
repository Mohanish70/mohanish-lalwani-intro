// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#f9f9f9',
        'background-dark': '#1a1a1a',
        text: '#333333',
        'text-dark': '#f9f9f9',
        primary: '#3490dc',
        'primary-dark': '#2779bd',
        secondary: '#ffed4a',
        'secondary-dark': '#f9d923',
        border: '#e2e8f0',
      },
    },
  },
  plugins: [],
};
