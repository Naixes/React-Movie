// 根组件

// 导入react
import React from 'react'

// 导入路由
import { HashRouter, Route, Link } from 'react-router-dom'

// 引入antd布局组件
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

// 导入其他组件
import Home from '@/components/Home/Home'
import Movie from '@/components/Movie/Movie'
import About from '@/components/About/About'

// 创建根组件
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  componentWillMount() {

  }

  render() {
    return <HashRouter>
      <Layout className="layout" style={{height:'100%'}}>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            // 监听url路由地址的变化指定选中项
            defaultSelectedKeys={[window.location.hash.split('/')[1]]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home"><Link to='/home'>首页</Link></Menu.Item>
            <Menu.Item key="movie"><Link to='/movie'>电影</Link></Menu.Item>
            <Menu.Item key="about"><Link to='/about'>关于</Link></Menu.Item>
          </Menu>
        </Header> 
        <Content style={{ backgroundColor: '#fff', height: '100%' }}>
          <Route path='/home' component={Home}></Route>
          <Route path='/movie' component={Movie}></Route>
          <Route path='/about' component={About}></Route>
        </Content>
        <Footer style={{ textAlign: 'center', height: '50px' }}>
          Sin Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </HashRouter>
  }
}
