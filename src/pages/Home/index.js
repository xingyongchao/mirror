import React, { Component } from 'react';
import { connect } from "mirrorx";
import Header from 'containers/header';
import Packages from 'containers/packages';
import './index.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="um-win home">
        <Header />
        <Packages />
      </div>
    )
  }
}

export default connect(state => state.Home)(Home);