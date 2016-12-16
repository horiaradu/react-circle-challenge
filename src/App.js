import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CircleModel from './model/Circle';
import Circle from './components/circle/Circle';
// import FilledCircle from './components/filled-circle/FilledCircle';

class App extends Component {
  render() {
    const center = {x: 500, y: 500};
    const radius = 250;
    const points = CircleModel.circlePoints(center, radius);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Circle points={points}/>
        </div>
      </div>
    );
  }
}

export default App;
