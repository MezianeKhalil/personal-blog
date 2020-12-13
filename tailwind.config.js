module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'Almarai':['Almarai', 'sans-serif'],
        'Poppins':['Poppins', 'sans-serif']
      },
      colors: {
        customBlue:'#0070f3',
        blackTheme:'#1f1f1F',
      },
      backgroundColor: theme =>({
        ...theme('colors')
      }),
      lineHeight: {
        '11': '2.5rem',
        '12': '3rem',
        '13': '3.5rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}