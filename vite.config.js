import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-with-three.js/', // GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'public/assets'),
      '@models': path.resolve(__dirname, 'public/models'),
      '@textures': path.resolve(__dirname, 'public/textures'),
    },
  },
});
