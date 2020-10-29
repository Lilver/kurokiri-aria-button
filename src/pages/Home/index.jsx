import React, { Component } from 'react'

import Menu from '../../components/Menu';
import Intro from '../../components/Intro';
import Style from './styles.module.less'

export default class Home extends Component {
  constructor(props) {
    super(props);

    document.title = "黑桐アリア"
  }
  render() {
    return (
      <div className={Style.container}>
        <Menu/>
        <main>
          <Intro/>
        </main>
      </div>
    )
  }
}