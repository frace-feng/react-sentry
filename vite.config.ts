import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "frace-yuly",
    project: "react-sentry"
  }), sentryVitePlugin({
    org: "frace-yuly",
    project: "react-sentry"
  })],
  build:{
    sourcemap: true,
  }
})