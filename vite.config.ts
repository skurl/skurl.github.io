import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Repo is skurl.github.io (user site), so it's served from the domain root.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
});
