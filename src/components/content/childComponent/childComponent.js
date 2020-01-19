import React from 'react';

export default class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: null,
    };
  }


  render() {
    return (
      <h2>child component</h2>
    );
  }
}