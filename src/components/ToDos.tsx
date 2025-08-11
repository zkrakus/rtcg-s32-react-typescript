import React from "react";
import Todo from "../models/todo";
import ToDoItem from "./ToDoItem";

const ToDos: React.FC<{ items: Todo[] }> = (props) => {
    return (
    <ul>
      {props.items.map((item) => (
        <ToDoItem id={item.id} text={item.text} /> 
      ))}
    </ul>
  );
};

export default ToDos; 
