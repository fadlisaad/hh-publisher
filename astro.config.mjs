import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
  server: {
    port: 3000,
    host: true,
  },
  integrations: [
    react(),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bm'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
