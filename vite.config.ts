import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(),  dts({
    tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
    rollupTypes: true,
  }),],
  build: {
    //library enrty and output settings
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'uikit',
      fileName: 'uikit'
    },
    //bundler options 
    //exteralize react-related imports 
    rollupOptions: {
      external: ['react', 'react-dom','react/jsx-runtime'],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        }
      } 
    }
  }
})
