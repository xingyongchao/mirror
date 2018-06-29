import React, { Component } from 'react';
import { withRouter } from 'mirrorx';
import PropTypes from 'prop-types';
import './index.css';

@withRouter

class Panel extends Component {

  static propTypes = {
    data: PropTypes.object
  };

  static defaultProps = {
    data: {}
  };

  constructor(props) {
    super(props);
    this.state = ({});
  }

  openWin = (name) => {
    const { history } = this.props;
    history.push('/package/' + name);
  }

  render() {
    const {
      image, 
      name,
      description,
      version,
      author
    } = this.props.data;
    return (
      <div className="panel um-box">
        <div className="panel-left" onClick={() => { this.openWin(name) }}>
          <img alt={name} src={image} />
        </div>
        <div className="panel-right um-bf1">
          <h3 onClick={() => { this.openWin(name) }}>{name}</h3>
          <p className="describe">{description || "description"}</p>
          <p className="edition">
            <span className="red">{version}</span> published by <span className="red">{author}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default Panel;