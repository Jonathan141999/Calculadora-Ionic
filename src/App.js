import React, { Component } from 'react';
import logo from './logo.svg';
import Calculator from './main/Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Calculator />
      </div>
    );
  }
}

export default App;
