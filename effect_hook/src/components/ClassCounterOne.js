import React, { Component } from "react";

export class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `You have clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Updating log title`);
      document.title = `You have clicked ${this.state.count} times`;
    }
  }

  increaseCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        Count : {this.state.count}
        <br></br>
        <button onClick={this.increaseCount}>Increment Count By 1</button>
      </div>
    );
  }
}

export default ClassCounterOne;
