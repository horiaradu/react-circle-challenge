import React, { Component } from 'react';
import CircleModel from '../../model/Circle';
import Point from '../point/Point';

export default class Circle extends Component {
  render() {
    const center = {x: 500, y: 500};
    const radius = 250;
    const points = CircleModel.circlePoints(center, radius);

    return (
      <div>
        <Point x={center.x} y={center.y} />
        {
          points.map(point => (
            <Point x={point.x} y={point.y} key={`${point.x}-${point.y}`} />
          ))
        }
      </div>
    );
  }
}
