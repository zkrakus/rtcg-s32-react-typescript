import Todo from "../models/todo" ;
import classes from './TodoItem.module.css'

const ToDoItem: React.FC<Todo> = ({id, text}) => {
    return (<li className={classes.item} key={id}>{text}</li>)
}

export default ToDoItem;