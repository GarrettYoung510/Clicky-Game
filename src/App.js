import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import clickBox from './components/clickBox';

const getRandomSpots = () => {
  // add boxes to random spots on the grid
}

class App extends Component {
  state = {
    clickBox: getRandomSpots()
  }


render() {
  return (
    <div className="container">
      <div className="row">
        <h1>Hello World</h1>
        <clickBox/>
        {/* 3 rows */}
        {/* 4 containers per row squares */}
      </div>
    </div>
  );
}
}
export default App;
