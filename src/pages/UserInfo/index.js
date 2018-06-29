import React, { Component } from 'react';
import { connect } from "mirrorx";
// 业务组件
import Header from 'containers/header';

class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

export default connect(state => state.UserInfo)(UserInfo);