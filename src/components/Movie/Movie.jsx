import React from 'react'

// 引入路由
import { Route, Link, Switch } from 'react-router-dom'

// 引入AntDesign组件
import { Layout, Menu } from 'antd'
const { Content, Sider } = Layout

import MovieList from './MovieList'
import MovieInfo from './MovieInfo'

export default class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <Layout style={{ height: '100%' }}>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[window.location.hash.split('/')[2]]}
          style={{ borderRight: 0 }}
        >
          <Menu.Item key="in_theaters"><Link to='/movie/in_theaters/1'>正在热映</Link></Menu.Item>
          <Menu.Item key="coming_soon"><Link to='/movie/coming_soon/1'>即将上映</Link></Menu.Item>
          <Menu.Item key="top250"><Link to='/movie/top250/1'>top250</Link></Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ paddingLeft: '1px', background: '#fff' }}>
        <Content style={{ background: '#fff', padding: 10, margin: 0, minHeight: 280 }}>
          {/* switch匹配到一个后不再匹配，exact会从上到下依次匹配 */}
          <Switch>
            <Route path='/movie/detail/:id' component={MovieInfo}></Route>
            <Route path='/movie/:type/:page' component={MovieList}></Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  }
}