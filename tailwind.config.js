// tailwind.onfig.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#0a192f',
        lightBg: '#112036',
        text: '#8892b0',
        heading: '#e6f1ff',
        accent: '#64ffda',
        'primary-foreground': '#e6f1ff',
        'secondary-foreground': '#e6f1ff',
        'accent-foreground': '#0a192f',
        'destructive-foreground': '#ffffff',
        'muted-foreground': '#e6f1ff',
        'card-foreground': '#e6f1ff',
        'popover-foreground': '#e6f1ff',
        border: '#cccccc',
        input: '#cccccc',
        ring: '#e6f1ff',
      },
      fontFamily: {
        primary: ['Inter', 'SF Pro Display', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        rainbow: {
          '0%': { color: 'red' },
          '14%': { color: 'orange' },
          '28%': { color: 'yellow' },
          '42%': { color: 'green' },
          '57%': { color: 'blue' },
          '71%': { color: 'indigo' },
          '85%': { color: 'violet' },
          '100%': { color: 'red' },
        },
       uofaColor: {
          '0%': { color: '#CC0033' },   
          '33%': { color: '#0033A0' },  
          '66%': { color: '#FFFFFF' },  
          '100%': { color: '#CC0033' },
        },
      },
      animation: {
        rainbow: 'rainbow 5s infinite ease-in-out',
        uofaColor: 'uofaColor 3s infinite ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
