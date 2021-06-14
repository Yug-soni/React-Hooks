import React, { Component } from "react";

class ClassCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        COUNT: {count}
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default ClassCounterTwo;
