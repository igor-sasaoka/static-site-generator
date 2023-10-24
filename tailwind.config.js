/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.html",
    "./deploy/index.html",
    "./deploy/posts/**/*.html",
    "./deploy/posts/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#219A49",
          
          "secondary": "#214185",
                   
          "accent": "#3FFE62",
                   
          "neutral": "#2c2b3b",
                   
          "base-100": "#F7F5F3",
                   
          "info": "#214185",
                   
          "success": "#1d814d",
                   
          "warning": "#FFE621",
                   
          "error": "#A30000",
        }
      },
    ],
  },
}

