// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  experimental: {
      svg: true
  },

  integrations: [starlight({ title: 'Test' })]
});
