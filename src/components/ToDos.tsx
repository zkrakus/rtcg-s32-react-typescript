import React from "react";
import Todo from "../models/todo";
import ToDoItem from "./ToDoItem";
import classes from './Todos.module.css'

const ToDos: React.FC<{ items: Todo[] }> = (props) => {
    return (
    <ul className={classes.Todos}>
      {props.items.map((item) => (
        <ToDoItem id={item.id} text={item.text} /> 
      ))}
    </ul>
  );
};

export default ToDos; 
