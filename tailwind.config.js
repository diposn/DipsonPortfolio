// tailwind.config.js
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
