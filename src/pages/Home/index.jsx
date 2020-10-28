import React, { Component } from 'react'
import Menu from '../../components/Menu';
import Style from './styles.module.less'

export default class Home extends Component {
  render() {
    return (
      <div className={Style.container}>
        <Menu/>
      </div>
    )
  }
}