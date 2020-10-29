import React, { Component } from 'react'

import classNames from 'classnames';
import axios from 'axios';
import Style from './styles.module.less';

import AriaStand from '../../assets/aria-stand.png'
import Bilibili from './img/bilibili.svg';
import Youtube from './img/youtube.png';
import Twitter from './img/twitter.png';


export default class index extends Component {
  componentDidMount() {
    axios.get('https://api.bilibili.com/x/relation/stat?vmid=4911722&json=jsonp').then(res => {
      console.log(res);
    })
  }
  
  render() {
    return (
      <div className={Style.container}>
        <div className={Style.avatar}>
          <img src={AriaStand} alt="stand" />
        </div>
  
        <div className={Style.detail}>
          <div className={Style.logo}>logo占位</div>
          <div className={Style.name}>黑桐亚里亚（黑桐アリア）</div>
          <div className={Style.link}>
            <a className={Style.bLink} rel="noopener noreferrer" target="_blank" href="https://space.bilibili.com/4911722">
              <img src={Bilibili} alt="bilibili" /> 黑桐亚里亚Official
            </a>
          </div>
          <div className={Style.link}>
            <a className={Style.yLink} rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCSUOEmvQLKPdiRnUgmHYX2g/featured">
              <img src={Youtube} alt="youtube" />黒桐アリアちゃんねる
            </a>
          </div>
          <div className={Style.link}>
            <a className={Style.tLink} rel="noopener noreferrer"  target="_blank" href="https://twitter.com/kurokiriaria">
            <img src={Twitter} alt="twitter" />黒桐アリア🍁🌟
            </a>
          </div>
        </div>
      </div>
    );
  }
}
