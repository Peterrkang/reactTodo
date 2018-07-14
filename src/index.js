import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function List(props) {
  return (
    <div>
      <ul>
        {props.list.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

class TodoList extends React.Component {
  state = { list: [], currentInput: "" };

  handleClick = e => {
    e.preventDefault();
    if (this.state.currentInput) {
      this.setState(({ list, currentInput }) => {
        return {
          list: [...list, currentInput],
          currentInput: ""
        };
      });
    }
  };

  handleKeyDown = e => {
    this.setState({ currentInput: e.target.value });
  };

  render() {
    const { list, currentInput } = this.state;
    return (
      <div className="TodoList">
        <h1>TodoList</h1>
        <h2>List</h2>
        <List list={list} />
        <input onChange={this.handleKeyDown} value={currentInput} />
        <button onClick={this.handleClick}>Add Todo</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoList />, rootElement);
