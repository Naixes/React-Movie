import React from 'react'

import styles from '@/css/movie_item.scss'

import { Rate } from 'antd'

export default class MovieItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log(this.props.images.small)
    return <div className={styles.item} onClick={this.goInfo}>
      <img src={this.props.images.small.replace('img1.doubanio.com','img3.doubanio.com')} alt=""/>
      <div className={styles.content}>
        <h4>电影名称：{this.props.title}</h4>
        <h5>上映年份：{this.props.year}年</h5>
        <h5>电影类型：{this.props.genres.join(',')}</h5>
      </div>
      <div className="rate">
        <Rate disabled defaultValue={this.props.rating.average/2} />
      </div>
    </div>
  }

  goInfo = () => {
    console.log(this.props)
    this.props.history.push('/movie/detail/' + this.props.id)
  }
}