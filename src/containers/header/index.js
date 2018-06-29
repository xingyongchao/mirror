import React, { Component } from 'react';
import { connect, Link } from "mirrorx";
import "./index.css";

class Header extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      title: '',
    };
  }

  componentDidMount() {
    // 仅仅是展示 获取两个store下的数据 真实场景不应这么写
    const { userinfo } = this.props.UserInfo;
    const { title } = this.props.Home;
    this.setState({
      name: userinfo.name,
      title,
    });
  }

  render() {
    const { name, title } = this.state;
    return (
      <div className="header">
        <div className="um-container um-box">
          <div className="um-bf1">{name}</div>
          <div className="um-bf1">{title}</div>
          <ul className="um-box">
            <li className="um-bf1">
              <Link to="/userinfo">Work</Link>
            </li>
            <li className="um-bf1">
              <Link to="/userinfo">Work</Link>
            </li>
            <li className="um-bf1">
              <Link to="/userinfo">Work</Link>
            </li>
            <li className="um-bf1">
              <Link to="/userinfo">Work</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  Home: state.Home,
  UserInfo: state.UserInfo
}))(Header);
