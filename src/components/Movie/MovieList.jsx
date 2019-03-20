import React from 'react'

import { Spin, Alert, Pagination } from 'antd'

import fetchJSONP from 'fetch-jsonp'
import MovieItem from './MovieItem.jsx'

export default class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      nowPage: parseInt(props.match.params.page) || 1,
      type: props.match.params.type,
      total: 0,
      pageSize: 12,
      isloading: true
    }
  }

  componentWillMount() {
    this.loadMovieListByTypeAndPage()
  }

  render() {
    return <div>
      {/* MovieList--{this.props.match.params.type}--{this.props.match.params.page} */}
      {this.renderList()}
    </div>
  }

  // props改变时触发的生命周期函数
  componentWillReceiveProps(newProps) {
    this.setState({
      nowPage: parseInt(newProps.match.params.page) || 1,
      type: newProps.match.params.type,
      isloading: true
    }, function() {
      this.loadMovieListByTypeAndPage()
    })
  }

  loadMovieListByTypeAndPage = () => {
    const start = (this.state.nowPage - 1) * this.state.pageSize

    const url = `http://api.douban.com/v2/movie/${this.state.type}?start=${start}&count=${this.state.pageSize}`

    fetchJSONP(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        movies: data.subjects,
        total: data.total,
        isloading: false
      })
    })
    // const data = require('./'+this.state.type+'.json') 
    // setTimeout(()=>{
    //   this.setState({
    //     movies: data.subjects,
    //     total: data.total,
    //     isloading: false
    //   })
    // }, 1000)
  }

  renderList = () => {
    if (this.state.isloading) {
      return <Spin tip="Loading...">
      <Alert
        message="正在请求"
        description="请稍等"
        type="info"
      />
    </Spin>
    }else {
      return <div>
        <div style={{display:'flex', flexWrap:'wrap', background: '#fff' }}>
          {this.state.movies.map(item => {
            return <MovieItem {...item} key={item.id} history={this.props.history}></MovieItem>
          })}
        </div>
        <Pagination onChange={this.pageChanged} defaultCurrent={this.state.nowPage} pageSize={this.state.pageSize} total={this.state.total} />
      </div>
    }
  }

  // 使用this.props.history.push()实现编程式导航
  pageChanged = (page) => {
    this.props.history.push('/movie/'+ this.state.type +'/' + page)
  }
}
