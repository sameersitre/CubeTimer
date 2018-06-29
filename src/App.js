import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCount: 0

    }
  }
  timer() {
    this.setState({
      currentCount: this.state.currentCount + 0.1
    })
    if(this.state.currentCount >60) { 
      clearInterval(this.intervalId);
    }
  }
  btnStartkeyReleased(){
    this.intervalId = setInterval(this.timer.bind(this), 100);
  }
  
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render() {
    const pStyle={
      fontSize: '40px',
    }
    return (
      <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <button onClick={this.btnStartkeyReleased.bind(this)}></button>
        <div  style={pStyle}>{this.state.currentCount}</div>

      </div>
    );
  }
}

export default App;
