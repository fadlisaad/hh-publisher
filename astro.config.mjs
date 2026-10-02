import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import emdash from 'emdash/astro';
import { d1, r2 } from '@emdash-cms/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({ imageService: 'passthrough' }),
  vite: {
    plugins: [tailwind()],
    server: {
      allowedHosts: true,
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  integrations: [
    react(),
    emdash({
      database: d1({ binding: 'DB' }),
      storage: r2({ binding: 'MEDIA' }),
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bm'],
    fallback: { bm: 'en' },
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
