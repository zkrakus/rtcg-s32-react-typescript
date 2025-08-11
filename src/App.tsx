import { useState } from "react";
import NewToDos from "./components/NewToDo";
import Todos from "./components/ToDos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewToDos onAddTodo={addTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
