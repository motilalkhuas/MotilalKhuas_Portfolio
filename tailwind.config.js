module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily : {
            julee : ['Julee'],
            roboto : ['Roboto'],
            poppins : ['Poppins']
        },
        keyframes: {
            bounce: {
                '0%, 100%': {
                    transform: 'translateX(-25%)'
                  },
                  '50%' : {
                    transform: 'translateX(25%)'
                  }
            },
          },
        animation: {
            'spin-slow': 'spin 4s linear infinite',
            'bounce-right' :  'bounce 3s linear infinite',
            'pulse-slow' : 'pulse 2s linear 100'
          }
    },
  },
  plugins: [],
}