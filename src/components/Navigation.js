import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prefer-stateless-function
export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/Quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
