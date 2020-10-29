import React from 'react'
import Style from './styles.module.less';

export default function Menu() {
  return (
    <div className={Style.container}>
      <div className={Style.title}>黑桐亚里亚（黑桐アリア）</div>
      <ul className={Style.btns}>
        <li><span>介绍</span></li>
        <li><span>按钮</span></li>
      </ul>
    </div>
  )
}
