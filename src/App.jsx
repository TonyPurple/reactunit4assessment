import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector'
import Circles from './components/Circles/Circles'

class App extends Component {
    state = {
        selected: 1
    }

    selectCircle = (newSelection) => {
        this.setState({
            selected: newSelection
        })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
        <CircleSelector
            selected={this.state.selected}
            onClick={this.selectCircle}
        />
        <Circles
        />
        </main>
      </div>
    );
  }
}

export default App;