import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header><h1>Header and value from parent component is <u>{this.props.inputValue}</u></h1></header>
    );
  }
}