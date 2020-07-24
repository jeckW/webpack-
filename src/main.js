//commonJS 引入
const {add,unil}=require('./js/mathInfo.js')

console.log(add(10,10));
console.log(unil(10,10));
//es6引入方式
 import {name,age} from "./js/info.js"
 console.log(name);
 console.log(age);

 //将css文件依赖  打包
 require('./css/normal.css')
//  require('./css/test.css')
 //将less文件依赖  打包
require('./css/species.less')

 document.writeln('<h2>你好啊，李迎合！</h2>');

 //引入vue
 import Vue from 'vue'
 
// import App from './vue/app'
import App from './vue/App.vue'

new Vue({
     el:'#app',
     template:'<App/>',
     components:{
        App
     }
 })

 document.writeln('<button>尼玛</button>')
 