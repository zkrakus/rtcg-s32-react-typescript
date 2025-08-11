import Todo from "../models/todo";

const ToDoItem: React.FC<Todo> = ({id, text}) => {
    return (<li key={id}>{text}</li>)
}

export default ToDoItem;