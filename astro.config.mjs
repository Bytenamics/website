import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import image from '@astrojs/image';
import compress from 'astro-compress';
import { SITE } from './src/ts/config';
import svelte from '@astrojs/svelte';
import { loadEnv } from 'vite';
import node from '@astrojs/node';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const env = loadEnv('production', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    compress({
      css: true,
      html: {
        removeAttributeQuotes: false,
      },
      img: true,
      js: true,
      svg: true,
    }),
    preact({
      compact: true,
    }),
    svelte(),
  ],
  vite: {
    ssr: {
      external: ['svgo'],
    },
    assetsInclude: '**/*.lottie',
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
