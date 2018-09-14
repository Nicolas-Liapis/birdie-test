import React, { Component } from 'react';

import './App.css';

class Headlines extends Component {
  render() {
    return (
      <div className="App-row">
        <div className="itemH"> Education </div>
        <div className="itemH"> Count </div>
        <div className="itemH"> Average Age </div>
      </div>
    );
  }
}


class App extends Component {
  constructor () {
    super()
    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    this.getPersons();
  }

  getPersons = _ => {
    fetch('http://localhost:4000')
      .then(response => response.json())
      .then(response => this.setState({persons: response.data}))
      .catch(err => console.log(err))
  }

  renderPerson = ({Variable, Count, Average_Age}) =>
  <div className="App-row" key={Math.random()}> <div className="item">{Variable}</div> <div className="item">{Count}</div> <div className="item">{Average_Age}</div></div>;

  render() {
    const { persons } = this.state;
    return (
      <div className="App">
        <Headlines />
        {persons.map(this.renderPerson)}
      </div>
    );
  }
}

export default App;
