import React, { Component } from 'react';
import Calculator from './calculator';
// eslint-disable-next-line react/prefer-stateless-function
export default class RenderCalculator extends Component {
  render() {
    return (
      <div>
        <h1>Let&apos;s do some math!</h1>
        <Calculator />
      </div>
    );
  }
}
