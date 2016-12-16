export default class Circle {
  static circlePoints(center, radius) {
    const points = [];
    for (let i = 0; i < 360; i += 0.1) {
      const angle = Circle.degreeToRadian(i);
      const point = {
        x: center.x + radius * Math.cos(angle),
        y: center.y + radius * Math.sin(angle)
      }
      points.push(point);
    }
    return points;
  }

  static discPoints(center, radius) {
    let points = [center];
    for (let i = 1; i <= radius; i += 5) {
      points = points.concat(Circle.circlePoints(center, i));
    }
    return points;
  }

  static degreeToRadian(degree) {
    return Math.PI * degree / 180;
  }
}
