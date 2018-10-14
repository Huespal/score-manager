import React, { Component } from 'react';
import './App.css';
import ScoresContainer from './containers/scores';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScoresContainer />
      </div>
    );
  }
}

export default App;
