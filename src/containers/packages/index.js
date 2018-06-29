import React, { Component } from 'react';
import { connect, actions } from "mirrorx";

import Panel from 'components/panel';
import "./index.css";

class Packages extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      
    };
  }

  componentWillMount() {
    actions.Home.getHomelist();
  }

  render() {
    const { lists } = this.props;
    return (
      <div className="packages">
        <div className="packages-title">
          <h2>Packages people 'ynpm install' a lot</h2>
        </div>
        <div className="packages-content">
          <ul>
            {
              lists.map((item, index) => {
                return (
                  <li key={index}><Panel data={item} /></li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(state => state.Home)(Packages);