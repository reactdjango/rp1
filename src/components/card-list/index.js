import React from "react";
import css from "../card-list/style.module.css";
import Card from "../card";

const CardList = (props) => (
  <div className={css.CardList}>
    {props.todos.map((todo) => (
      <Card key={todo.id} tod={todo} />
    ))}
  </div>
);

export default CardList;
