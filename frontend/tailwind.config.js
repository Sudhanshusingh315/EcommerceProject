/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#018ADC",
        "offWhite": "#FBF9F7",
      },
      screens:{
        'xl':'1024px',
        '2xl':'1024px'
      },
      container: {
        center: true,
        margin: "2rem",
      },
      fontFamily: {
        display: ["Bebas Neue"],
      },
    },
  },
  plugins: [],
};
