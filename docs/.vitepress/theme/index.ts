/*
 * @Descripttion: 
 * @Author: zhangjiahao
 * @Date: 2022-09-22 10:47:48
 * @LastEditors: zhangjiahao
 * @LastEditTime: 2022-09-22 13:44:12
 */
import Theme from 'vitepress/theme'
import SmartyUI from '../../../src/entry'

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'


export default {
 ...Theme,
 enhanceApp({ app }) {
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
    app.use(SmartyUI)
  },
}