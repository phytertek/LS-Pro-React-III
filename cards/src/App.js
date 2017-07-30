import React, { Component } from 'react'
import NavBar from './NavBar'
import CardContainer from './CardContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <CardContainer/>
      </div>
    );
  }
}

export default App;
