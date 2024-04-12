/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'modal': "url('./app/assets/modal.png')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          100: "#292929",
          700: '#FFFF00',
        },
        secondary: {
          400: '#91D2F7',
        },
        grays: {
          100: '#D9D9D9',
          200: "#9B9B9B",
          300: "#454545",
          400: "#E7E6E6"
        }
      },
      spacing: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
      },
      fontFamily: {
        body: ['var(--font-anderson-grotesk)'],
        heading: ['var(--font-neue-machina)']
      },
      keyframes: {
        'fly-in-bottom': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fly-in-bottom': 'fly-in-bottom 0.5s ease-out',
      },
    },
  },
  plugins: [],
}