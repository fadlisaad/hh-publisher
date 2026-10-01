import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import emdash, { local } from 'emdash/astro';
import { playgroundDatabase } from '@emdash-cms/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [
    react(),
    /*
    emdash({
      db: playgroundDatabase(),
      storage: local(),
    }),
    */
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bm'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: 'server',
});
