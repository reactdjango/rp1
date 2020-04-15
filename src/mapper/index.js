import React, { Component } from "react";

import css from "./style.module.css";
import CardList from "../components/card-list";
class Mapper extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
    };
  }
  // new
  componentDidMount() {
    this.getTodos();
  }
  // new
  getTodos() {
    fetch("http://127.0.0.1:8000/api/")
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data }));
  }
  render() {
    return (
      <div>
        <CardList todos={this.state.todos} />
      </div>
    );
  }
}

export default Mapper;
