 const path=require('path');
 const webpack=require('webpack');
 //版权配置
 const htmlplugin=require('html-webpack-plugin');
 //自动打包index.html
 const HtmlWebpackPlugin = require('html-webpack-plugin');
//丑化打包的js
const UglifyjswebpackPlugin=require('uglifyjs-webpack-plugin');
module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'bundle.js',
          //当url图片大于limit大小的时候安装file-loader 需在这里配置publicPath找到打包的文件
        //  publicPath:'dist/',
    },
  
    //安装loader 解析css文件进行打包配置
    module: {
        rules: [
          {
            test: /\.css$/,
            //css-loader 负责将css文件进行加载
            //style-loader 负责将样式添加到dom中
            //使用多个loader的，是从右向左的
            use: ['style-loader','css-loader' ]
          },
          {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
         },
         {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                    //当土图片小于18000时，会被解析成base64字符串形式
                    //当图片大于18000时，需要进行file-loader模块进行加载
                  limit: 18000,
                  //定义打包的图片存储位置与命名规范
                  name:'imgs/[name].[hash:8].[ext]'
                }
              }
            ]
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          },
          {
            test:/\.vue$/,
            use:['vue-loader']
          }
        ]
      },
    resolve:{
      extensions:['.js','.css','.vue'],
      alias:{
        'vue$':'vue/dist/vue.esm.js'
      }
    },
    plugins:[
      new webpack.BannerPlugin('最终版权归杜伟所有'),
      new HtmlWebpackPlugin({
        template:'index.html'
      })
    ],
  
}