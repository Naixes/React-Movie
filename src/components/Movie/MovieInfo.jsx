import React from 'react'

// 引入第三方包
import fetchJSONP from 'fetch-jsonp'

import { Button, Icon, Spin, Alert } from 'antd'

export default class MovieInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {},
      isLoading: true
    }
  }

  // 请求数据
  componentWillMount() {
    fetchJSONP('http://api.douban.com/v2/movie/subject/' + this.props.match.params.id)
    .then(res => res.json())
    .then(data => {
      this.setState({
        info: data,
        isLoading: false
      })
    })
  }

  render() {
    return <div>
      <Button type="primary" onClick={this.goback}>
        <Icon type="left" />返回
      </Button>

      {this.renderInfo()}
    </div>
  }

  // 返回列表页面
  goback = () => {
    this.props.history.go(-1)
  }

  renderInfo = () => {
    if (this.state.isLoading) {
      return <Spin tip="Loading...">
        <Alert
          message="正在请求"
          description="请稍等"
          type="info"
        />
      </Spin>
    }else {
      return <div className="container">
        {/* {console.log(this.state.info)} */}
        <div style={{textAlign: 'center'}}>
          <h2 style={{}}>{this.state.info.title}</h2>
          <img src={this.state.info.images.large.replace('img7', 'img3')} alt=""/>
        </div>
        <p style={{textIndent: '2em', lineHeight: '30px'}}>{this.state.info.summary}</p>
      </div>
    }
  }
}