/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        'my-blue':'#64bbcd',
        'hover-blue':'#358493',
        'main-bg': '#19191c',
        'main-black':"#97a4b6",
        'shade':'#34363c',
        'nav-color':"#272727",
        'more-dark':"#1c1d20"

      },
      blur:{
        '5xl':'150px'
      },
      width:{
        'part':'55rem'
      },
      height:{
        'part':'55rem'
      },
      borderColor:{
        'shade':'#34363c'
      }

    },
  },
  plugins: [],
}

