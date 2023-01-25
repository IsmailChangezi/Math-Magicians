import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  onClickButton = (e) => {
    const newState = calculate(this.state, e.target.name);
    this.setState(newState);
  };

  render() {
    const { total } = this.state;
    let result = total === null ? 0 : total;
    const { next } = this.state;
    result = next !== null ? next : result;

    return (
      <div id="calculator">
        <input
          id="result"
          type="text"
          name="calculator-screen"
          value={result}
        />
        <div id="calcButtons">
          <div>
            <button
              onClick={this.onClickButton}
              name="AC"
              type="button"
              className="calcButton"
              id="clear"
            >
              AC
            </button>
            <button
              onClick={this.onClickButton}
              name="+/-"
              type="button"
              className="calcButton"
              id="sign"
            >
              +/-
            </button>
            <button
              onClick={this.onClickButton}
              name="%"
              type="button"
              className="calcButton"
              id="percent"
            >
              %
            </button>
            <button
              onClick={this.onClickButton}
              name="÷"
              type="button"
              className="calcButton operator"
              id="divide"
            >
              ÷
            </button>
          </div>
          <div>
            <button
              onClick={this.onClickButton}
              name="7"
              type="button"
              className="calcButton"
              id="7"
            >
              7
            </button>
            <button
              onClick={this.onClickButton}
              name="8"
              type="button"
              className="calcButton"
              id="8"
            >
              8
            </button>
            <button
              onClick={this.onClickButton}
              name="9"
              type="button"
              className="calcButton"
              id="9"
            >
              9
            </button>
            <button
              onClick={this.onClickButton}
              name="x"
              type="button"
              className="calcButton operator"
              id="multiply"
            >
              x
            </button>
          </div>
          <div>
            <button
              onClick={this.onClickButton}
              name="4"
              type="button"
              className="calcButton"
              id="4"
            >
              4
            </button>
            <button
              onClick={this.onClickButton}
              name="5"
              type="button"
              className="calcButton"
              id="5"
            >
              5
            </button>
            <button
              onClick={this.onClickButton}
              name="6"
              type="button"
              className="calcButton"
              id="6"
            >
              6
            </button>
            <button
              onClick={this.onClickButton}
              name="-"
              type="button"
              className="calcButton operator"
              id="less"
            >
              -
            </button>
          </div>
          <div>
            <button
              onClick={this.onClickButton}
              name="1"
              type="button"
              className="calcButton"
              id="1"
            >
              1
            </button>
            <button
              onClick={this.onClickButton}
              name="2"
              type="button"
              className="calcButton"
              id="2"
            >
              2
            </button>
            <button
              onClick={this.onClickButton}
              name="3"
              type="button"
              className="calcButton"
              id="3"
            >
              3
            </button>
            <button
              onClick={this.onClickButton}
              name="+"
              type="button"
              className="calcButton operator"
              id="plus"
            >
              +
            </button>
          </div>
          <div>
            <div>
              <button
                onClick={this.onClickButton}
                name="0"
                className="calcButton2"
                type="button"
                id="button17"
              >
                0
              </button>
            </div>
            <div>
              <button
                onClick={this.onClickButton}
                name="."
                className="calcButton"
                type="button"
                id="button18"
              >
                .
              </button>
              <button
                onClick={this.onClickButton}
                name="="
                className="calcButton operator"
                type="button"
                id="button19"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
