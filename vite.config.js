import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

import fs from 'fs';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Layouts from 'vite-plugin-vue-layouts';
import Pages from 'vite-plugin-pages';
import eslint from 'vite-plugin-eslint';

import 'dotenv/config';

// https://vitejs.dev/config/
const viteConfig = {
  define: {
    'process.env': process.env,
  },
  server: {
    host: 'localhost.admin.jvid.com',
    port: 3003,
  },
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    eslint(),
    WindiCSS(),
    AutoImport({
      include: [/\.vue$/],
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.js',
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/],
      dirs: 'src/components',
      dts: 'src/auto-components.js',
    }),
    createSvgIconsPlugin({
      symbolId: '[name]',
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
};

if (process.env.ENV === 'local') {
  viteConfig.server = {
    ...viteConfig.server,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'https/localdev_key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'https/localdev.pem')),
    },
  };
}

export default defineConfig(viteConfig);
