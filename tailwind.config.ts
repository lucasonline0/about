import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#040c0b',
        panel: '#0b1615',
        line: '#1b3532',
        neon: '#2bf5a0'
      }
    }
  },
  plugins: []
};

export default config;
