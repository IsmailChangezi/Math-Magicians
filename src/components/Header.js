import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <Link to="/">
            <h1 className="title">Math Magicians</h1>
          </Link>
        </div>
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
      </header>
    );
  }
}
