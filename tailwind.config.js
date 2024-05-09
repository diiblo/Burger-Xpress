/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary:"#E7272D",
        secondary:"#FBB217",
      },
      backgroundImage: {
        "ardoise": "url('../img/background-slate.jpg')",
      },
    },
  },
  plugins: [],
}

