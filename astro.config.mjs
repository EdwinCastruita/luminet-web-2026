// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/alta-disponibilidad': {
      status: 301,
      destination: '/internet-de-respaldo/'
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});