// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.enoa.gr',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    mdx(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://www.enoa.gr/',
        'https://www.enoa.gr/about/',
        'https://www.enoa.gr/activities/',
        'https://www.enoa.gr/news/',
        'https://www.enoa.gr/gallery/',
        'https://www.enoa.gr/contact/',
        'https://www.enoa.gr/sports/rowing/',
        'https://www.enoa.gr/sports/sailing/',
        'https://www.enoa.gr/sports/canoe-kayak/',
        'https://www.enoa.gr/sports/swimming/',
        'https://www.enoa.gr/regattas/'
      ],
      i18n: {
        defaultLocale: 'el',
        locales: {
          el: 'el-GR'
        }
      }
    })
  ]
});