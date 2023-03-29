import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prefer-stateless-function
export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="calculator">Calculator</Link>
          </li>
          <li>
            <Link to="quote">Quote</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
