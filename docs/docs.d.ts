/*
 * @Descripttion: 
 * @Author: zhangjiahao
 * @Date: 2022-09-22 13:33:34
 * @LastEditors: zhangjiahao
 * @LastEditTime: 2022-09-22 13:33:38
 */
declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
