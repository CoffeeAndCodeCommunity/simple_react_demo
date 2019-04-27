import React, { Component } from 'react';

class App extends Component {
  state = {
    counter: 0
  }


  increment() {
    this.setState({ counter: this.state.counter += 1 })
  }


  render() {
    return (
      <>
        <h1>Hello {this.props.name}</h1>
        {this.state.counter}
        <button onClick={this.increment.bind(this)}>Click me</button>
      </>
    );
  }

}

export default App;
