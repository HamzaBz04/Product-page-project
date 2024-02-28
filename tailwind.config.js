/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      mobile:'375px',
      desktop:'800px'
    },
    extend: {
      colors:{
        primary:{
          orange:'hsl(26, 100%, 55%)',
          paleOrange:'hsl(25, 100%, 94%)'

        },
        neutral:{
          darkblue: 'hsl(220, 13%, 13%)',
          darkGrayishBlue: 'hsl(219, 9%, 45%)',
          Grayishblue: 'hsl(220, 14%, 75%)',
          Lightgrayishblue: 'hsl(223, 64%, 98%)',
          White: 'hsl(0, 0%, 100%)',
          Black: 'hsl(0, 0%, 0%)'
          }
      },
      fontFamily: {
        kumbh: ['kumbh', 'sans'],
      },
      height:{
        h87:'87vh'
      },
      width:{
        w90:'90%'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

