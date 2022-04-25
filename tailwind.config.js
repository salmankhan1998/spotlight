module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      width: (theme) => ({
        '30': '10rem'
      }),

      colors: {
        white: '#fff',
        
    gray:{
          '800' : 'rgba(110,110,110,1)'
        },
        
        yellow:{
          '700' : 'rgba(249,213,66,1)'
        },
        black:{
          '700' : 'rgba(140,140,140,1)',
          '800' : 'rgba(18,18,18,1)',
          '900' : 'rgba(15,15,15,1)'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
