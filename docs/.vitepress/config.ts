/*
 * @Descripttion: 
 * @Author: zhangjiahao
 * @Date: 2022-09-22 10:19:03
 * @LastEditors: zhangjiahao
 * @LastEditTime: 2022-09-22 13:47:14
 */
import {defineConfig} from 'vitepress'
import { demoBlockPlugin } from "vitepress-theme-demoblock";

const sidebar:any = {
    '/': [
        {
          text: '通用',
          items: [
            { text: 'Button 按钮', link: '/components/button/' },
          ]
        },
      ]
}

export default defineConfig({
    title: "🔨  Smarty-UI",
    themeConfig: {
        sidebar
    },
    markdown: {
        config: (md) => {
          // 添加DemoBlock插槽
          md.use(demoBlockPlugin)
        }
      }
})