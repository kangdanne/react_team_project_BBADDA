import React, { Component } from 'react';
import MemberForm from './LoginForm/MemberForm/MemberForm';
import './LoginBox.scss';

class LoginBox extends Component {
  constructor() {
    super();
    this.state = {
      isClick: false, // 아직 미구현
    };
  }

  // changeLoginType = () => {
  //   const
  //   this.setState({})
  // }

  render() {
    const { isClick } = this.state;
    return (
      <div className="LoginBox">
        <ul className="loginBoxUl">
          <li className="loginBoxLi">
            <a href="javascript:;" onClick>
              회원
            </a>
          </li>
          <li className="loginBoxLi">
            <a href="javascript:;">비회원 (주문조회)</a>
          </li>
        </ul>
        <div className="forms">
          <MemberForm />
        </div>
      </div>
    );
  }
}

export default LoginBox;
