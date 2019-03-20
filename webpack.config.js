const path = require('path')

// 引入html-webpack-plugin插件:将index.html托管到内存中 并自动引入打包好的main.js
const htmlWebpackPlugin = require('html-webpack-plugin')
// 配置托管模板和名称，也可以直接在plugins里面new
const htmlPlugin = new htmlWebpackPlugin ({
  template: path.join(__dirname,'./src/index.html'),
  filename: 'index.html'
})

// webpack基于node开发，通过node模块向外暴露了一个配置对象
module.exports = {
  // webpack 4.x 中有默认的入口和出口路径可以省略
  // 4.x 必须配置mode development或production(会进行压缩)
  mode: 'development',
  // 配置所有的插件
  plugins: [htmlPlugin],
  // 所有第三方模块的匹配规则
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'url-loader' },
      // 将自定义样式规定格式为scss并启用模块化与第三方的全局样式进行区分
      { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&name=[path][name]-[local]-[hash:5]', 'sass-loader'] },
    ]
  },
  resolve: {
    // 配置import 时可以省略的后缀名
    extensions: ['.js', '.jsx', '.json'],
    // 在requir或import时会用到这个配置
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
}