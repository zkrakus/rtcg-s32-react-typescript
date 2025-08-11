import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const ToDoItem: React.FC<{
  item: Todo;
  onRemoveTodo: () => void;
}> = ({item, onRemoveTodo}) => {



    return (
    <li onClick={onRemoveTodo} className={classes.item} key={item.id}>
      {item.text}
    </li>
  );
};

export default ToDoItem;
