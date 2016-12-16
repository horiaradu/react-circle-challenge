import React, { Component } from 'react';

export default class Point extends Component {
  render() {
    return (
      <div
        className="point" style={ { left: this.props.x, top: this.props.y, backgroundColor: this.props.color} }
      >
      </div>
    );
  }
}
