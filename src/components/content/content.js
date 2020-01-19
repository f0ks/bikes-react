import React from 'react';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  render() {
    return (
      <section className={"content"}>
        <input type={"text"} onChange={this.handleChange}/>
        <h2>input is {this.state.value}</h2>
      </section>
    );
  }
}