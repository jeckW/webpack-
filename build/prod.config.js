
//丑化打包的js
const UglifyjswebpackPlugin=require('uglifyjs-webpack-plugin');
const webpackMerge=require('webpack-merge');
const baseConfig = require('./base.config');

//配置文件合并 公共文件和生产配置文件合并
module.exports=webpackMerge(baseConfig,{
                        plugins:[new UglifyjswebpackPlugin()],

})
