import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React Hooks',
      exerciseNo: 'first'
    };
  }

  render() {
    return (
      <div className="app">
        <Hello name={this.state.name} exerciseNo={this.state.exerciseNo} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
