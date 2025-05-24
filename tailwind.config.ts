import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#101010', // Ana koyu arka plan
        'neon-pink': '#FF0057', 
        'neon-purple': '#9D00FF',
        'neon-cyan': '#00E0FF',
        'neon-green': '#00FF9D',
        'brand-light-text': '#F0F0F0', // Koyu arka plan için açık metin rengi
        'brand-secondary-text': '#A0A0A0', // İkincil metin rengi
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
        mono: ['monospace'],
      },
      boxShadow: {
        'neon-glow-pink': '0 0 5px #FF0057, 0 0 10px #FF0057, 0 0 15px #FF0057',
        'neon-glow-purple': '0 0 5px #9D00FF, 0 0 10px #9D00FF, 0 0 15px #9D00FF',
        'neon-glow-cyan': '0 0 5px #00E0FF, 0 0 10px #00E0FF, 0 0 15px #00E0FF',
        'neon-glow-green': '0 0 5px #00FF9D, 0 0 10px #00FF9D, 0 0 15px #00FF9D',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Eğer video kartları için kullanıyorsak
  ],
};
export default config;
