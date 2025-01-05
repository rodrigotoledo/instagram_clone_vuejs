/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '244': '244px', // Adiciona a classe "w-244"
        '304': '304px', // Adiciona "w-304"
        '470': '470px', // Adiciona "w-470"
      },
      maxWidth: {
        '244': '244px', // Adiciona a classe "max-w-244"
        '304': '304px', // Adiciona "w-304"
        '470': '470px', // Adiciona "w-470"
      },
    },
  },
  plugins: [],
}

