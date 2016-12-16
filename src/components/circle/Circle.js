import React, { Component } from 'react';
import './Circle.css';
import Point from '../point/Point';

export default class Circle extends Component {
  constructor() {
    super();
    this.state = { colors: {} };
    this.changeColors = this.changeColors.bind(this);
  }

  componentWillMount() {
    this.changeColors();
  }

  static pointKey(point) {
    return `${point.x}-${point.y}`
  }

  changeColors() {
    const newColors = this.props.points.reduce((acc, point) => {
      const newColor = this.state.colors[Circle.pointKey(point)] === 'red' ? 'blue' : 'red';
      return Object.assign(acc, {[Circle.pointKey(point)]: newColor});
    }, {});

    this.setState({
      colors: newColors,
    });
  }

  pointColor(point) {
    return this.state.colors[Circle.pointKey(point)];
  }

  pointWidth(point) {
    return this.state.colors[Circle.pointKey(point)] === 'red' ? 1 : 10;
  }

  pointHeight(point) {
    return this.state.colors[Circle.pointKey(point)] === 'red' ? 1 : 10;
  }

  render() {
    return (
      <div>
        <div>
          <button
            style={ {position: 'absolute', left: 20, top: 20} }
            onClick={ this.changeColors }
          >
            Random colors
          </button>
        </div>
        {
          this.props.points.map(point => (
            <Point x={point.x} y={point.y}
            color={this.pointColor(point)}
            width={this.pointWidth(point)}
            height={this.pointHeight(point)}
            key={Circle.pointKey(point)} />
          ))
        }
      </div>
    );
  }
}
