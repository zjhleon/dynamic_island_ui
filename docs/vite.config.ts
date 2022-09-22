/*
 * @Descripttion: 
 * @Author: zhangjiahao
 * @Date: 2022-09-22 10:17:35
 * @LastEditors: zhangjiahao
 * @LastEditTime: 2022-09-22 10:17:50
 */
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    Unocss(),
  ],
});