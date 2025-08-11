import React from "react";
import Todo from "../models/todo";
import ToDoItem from "./ToDoItem";
import classes from "./Todos.module.css";

const ToDos: React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void }> = ({ items, onRemoveTodo }) => {
  return (
    <ul className={classes.Todos}>
      {items.map((item) => (
        <ToDoItem item={item} onRemoveTodo={onRemoveTodo.bind(null, item.id)}/>
      ))}
    </ul>
  );
};

export default ToDos;
