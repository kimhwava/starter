import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(),solidPlugin()],
  server: {
    port: 3000,
    allowedHosts: https://devserver-main--kimhwa.netlify.app,
  },
  build: {
    target: 'esnext',
  },
});
