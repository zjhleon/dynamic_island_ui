/*
 * @Descripttion: 
 * @Author: zhangjiahao
 * @Date: 2022-09-21 16:03:15
 * @LastEditors: zhangjiahao
 * @LastEditTime: 2022-09-21 18:17:46
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module'vue/dist/vue.esm-browser';