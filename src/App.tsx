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

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id)
    })
  }

  return (
    <div>
      <NewToDos onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
