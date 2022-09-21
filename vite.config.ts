import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from "./config/unocss";

const rollupOptions = {

    external: ["vue", "vue-router"],
    output: {
        assetFileNames: `assets/[name].css`,
      globals: {
        vue: "Vue",
      },
    },
  };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
        vue(), 
        vueJsx(),
        Unocss()
    ],
  build: {
    rollupOptions,
    minify:false,
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "dynamic_island_ui",
      fileName: "dynamic_island_ui",
      // 导出模块格式
      formats: ["esm", "umd","iife"],
    },
  },
})
