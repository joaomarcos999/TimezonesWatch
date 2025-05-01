import { defineConfig } from 'vite';

export default defineConfig({
  base: '/TimezonesWatch/',
});

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}