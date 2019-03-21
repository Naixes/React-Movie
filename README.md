# 项目结构

**src** -- 项目源文件

​	App.jsx -- 项目根组件

​	index.js -- 打包入口文件

​	index.html

​	images

​	css

​	components

​		movie

​			MovieContainer.jsx

**.babelrc** -- babel的配置文件

**package.json** -- 自动生成，记录项目信息和一些项目依赖等数据

package.json -- 自动生成，记录项目信息和一些项目依赖等数据

**webpack.config.js** --  webpack配置文件，配置插件，第三方文件匹配规则等

# 项目准备

App.jsx 

导入 **React** （react）

创建根组件

index.js

导入 **React** 和 **React-Dom** （react-dom）

引入根组件并渲染到页面

## 完成基本布局

使用 **AntDesign** Layout布局

## 完成路由切换

导入路由模块 **react-router-dom**

新建电影组件

实现路由切换

路由传参：this.props.match.params.xx获取参数

## 获取数据

ES6的fetch API ：基于Promise封装，第一个then不能获取到数据，是一个Response对象，通过返回response.json()获取data

第三方fetch：fetch-jsonp

在componentWillMount中请求数据

## 添加Loading效果

使用AntDesign的spin组件

## 渲染数据

使用AntDesign的Rate组件

## 监听props的改变

在componentWillReceiveProps(nextProps)中监听

注意this.setState是异步的，回调中执行之后的操作

## 实现分页

使用AntDesign的Pagination组件，绑定onchange事件

使用编程式导航实现分页跳转this.props.history.push("")

## 实现详情页面

exact也会从上到下依次匹配

<Switch>实现精确匹配

实现返回