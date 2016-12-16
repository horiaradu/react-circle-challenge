import React, { Component } from 'react';
import './FilledCircle.css';
import CircleModel from '../../model/Circle';
import Point from '../point/Point';

export default class FilledCircle extends Component {
  render() {
    const center = {x: 1200, y: 500};
    const radius = 250;
    const points = CircleModel.discPoints(center, radius);

    return (
      <div>
        <div>
          <button style={ {position: 'absolute', left: 100, top: 20} }>
            Random colors
          </button>
        </div>
        {
          points.map(point => (
            <Point x={point.x} y={point.y} key={`${point.x}-${point.y}`} />
          ))
        }
      </div>
    );
  }
}
