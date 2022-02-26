import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../models/todos";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map(item => <TodoItem text={item.text} key={item.id} />)}
    </ul>
  )
};

export default Todos;