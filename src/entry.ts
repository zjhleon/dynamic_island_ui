/*
 * @Descripttion:
 * @Author: zhangjiahao
 * @Date: 2022-09-21 16:15:45
 * @LastEditors: zhangjiahao
 * @LastEditTime: 2022-09-22 15:53:46
 */
import { App } from 'vue';
import JSXButton from './JSXButton';
import SFCButton from './SFCButton.vue';
import MyButton from './button';

//导出单独组件
export { JSXButton, SFCButton, MyButton };

//编写一个插件，实现install方法

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
};
