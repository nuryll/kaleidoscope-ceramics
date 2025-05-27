/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBlack: '#0C0C0C',
        brandWhite: '#FFFFFF',
        brandGray: '#555555',
        textMuted: '#666666',
        primaryblue: '#DDECED',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        heading: ['2.5rem', { lineHeight: '3rem' }],
        body: ['1rem', { lineHeight: '1.5rem' }],
        small: ['0.875rem', { lineHeight: '1.25rem' }],
      },
      spacing: {
        heroPadding: '3rem',
        imageGap: '1.5rem',
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        subtle: '0px 4px 12px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;

