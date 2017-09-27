import React, { Component } from 'react';
import { NavBar ,WingBlank} from 'antd-mobile';
import './Introduction.css';
import {
  BrowserRouter as Router,
  Route,
  Link
}  from 'react-router-dom';
class Introduction extends Component{
  onOpenChange(){
      window.location.href="/";
  }
  render(){
    return(
      <div>
        <NavBar iconName="left" onLeftClick={this.onOpenChange.bind(this)} className='my-NavBar'>关于我</NavBar>
          <WingBlank className='titleCenter'>玉树临风美少年,揽镜自顾夜不眠</WingBlank>
          <WingBlank className='titleCenter'>JAVA WEB & 前端</WingBlank>
          <WingBlank className='titleCenter'>想了解更多，请戳下面</WingBlank>
          <WingBlank className='titleCenter'><a href='http://www.lovelifeloveyou.github.io' target="view_window">http://www.lovelifeloveyou.github.io</a></WingBlank>
      </div>
    )
  }
}


export default Introduction;
