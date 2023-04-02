/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage:{
        'mic_tem': "url('/img/mic_tem.avif')",
        'x_box_back': "url('/img/x-box-bg.avif')",
      }
    },
  },
  plugins: [],
}
