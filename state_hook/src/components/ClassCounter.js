import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <button onClick={this.incrementCounter}>Count :- {counter}</button>
      </div>
    );
  }
}

export default ClassCounter;
