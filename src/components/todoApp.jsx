import TodoForm from "./todoForm";
import TodoActions from "./todoActions";
import Todos from "./todos";
import { useState } from "react";

const fakeTodos = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Learn JSX", completed: false },
  { id: 3, title: "Build a React App", completed: false },
];

const TodoApp = () => {
  const [todos, setTodos] = useState(fakeTodos);

  const handleTodoAdd = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleTodoEdit = (id, newTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id == id ? newTodo : todo))
    );
  };

  const handleTodoDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleTodoClear = () => {
    setTodos([]);
  };

  const handleToggleCheckAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, completed: !todo.completed }))
    );
  };

  const len = todos.length;
  const filteredLen = todos.filter((todo) => todo.completed).length;
  return (
    <main className="main-container">
      <TodoForm handleTodoAdd={handleTodoAdd} />
      <TodoActions
        len={len}
        filteredLen={filteredLen}
        handleTodoClear={handleTodoClear}
        handleToggleCheckAll={handleToggleCheckAll}
      />
      <Todos
        todos={todos}
        handleTodoDelete={handleTodoDelete}
        handleTodoEdit={handleTodoEdit}
      />
    </main>
  );
};

export default TodoApp;
