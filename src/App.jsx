import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector'
import Circles from './components/Circles/Circles'

class App extends Component {
    state = {
        selected: 'Circle 1 Selected'
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
        <CircleSelector
            selected={this.state.selected}
        />
        <Circles
        />
        </main>
      </div>
    );
  }
}

export default App;