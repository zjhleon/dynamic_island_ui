/*
 * @Descripttion:
 * @Author: zhangjiahao
 * @Date: 2022-09-21 16:03:15
 * @LastEditors: zhangjiahao
 * @LastEditTime: 2022-09-23 10:27:53
 */
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from './config/unocss';

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    assetFileNames: `assets/[name].css`,
    globals: {
      vue: 'Vue'
    }
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss()],
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    sourcemap: true,
    brotliSize: true,
    lib: {
      entry: './src/entry.ts',
      name: 'dynamic_island_ui',
      fileName: 'dynamic_island_ui',
      // 导出模块格式
      formats: ['esm', 'umd', 'iife']
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
});
