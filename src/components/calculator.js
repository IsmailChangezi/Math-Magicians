import React, { Component } from "react";
// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <form name="calculator">
          <div className="wrapper">
            {/* INPUT SECTION */}
            <div className="inputArea">
              <input name="userInput" type="text" placeholder="0" />
            </div>
            {/* BUTTON SECTION */}
            <div className="buttons">
              <div className="btnC btnr1">
                <input type="button" value="C" />
              </div>
              <div className="btnMod btnr1">
                <input type="button" value="%" />
              </div>
              <div className="btnSign btnr1">
                <input type="button" value="+/-" />
              </div>
              <div className="btnD btnr1">
                <input type="button" value="/" />
              </div>
              <div className="btn7 btnr2">
                <input type="button" value="7" />
              </div>
              <div className="btn8 btnr2">
                <input type="button" value="8" />
              </div>
              <div className="btn9 btnr2">
                <input type="button" value="9" />
              </div>
              <div className="btnX btnr1">
                <input type="button" value="*" />
              </div>
              <div className="btn4 btnr2">
                <input type="button" value="4" />
              </div>
              <div className="btn5 btnr2">
                <input type="button" value="5" />
              </div>
              <div className="btn6 btnr2">
                <input type="button" value="6" />
              </div>
              <div className="btnM btnr1">
                <input type="button" value="-" />
              </div>
              <div className="btn1 btnr2">
                <input type="button" value="1" />
              </div>
              <div className="btn2 btnr2">
                <input type="button" value="2" />
              </div>
              <div className="btn3 btnr2">
                <input type="button" value="3" />
              </div>
              <div className="btnA btnr1">
                <input type="button" value="+" />
              </div>
              <div className="btnDecimal btnr2">
                <input type="button" value="." />
              </div>
              <div className="btn0 btnr2">
                <input type="button" value="0" />
              </div>
              <div className="btnBack btnr2">
                <input type="button" value="<" />
              </div>
              <div className="btnE btnr1">
                <input type="button" value="=" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
