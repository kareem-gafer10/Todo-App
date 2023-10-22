/* eslint-disable react/prop-types */
import { useState } from "react";

import TodoData from "./todoData";
import EditTodo from "./editTodo";

const Todo = ({ todo, handleTodoDelete, handleTodoEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckTodo = () => {
    const newTodo = {
      ...todo,
      completed: !todo.completed,
    };
    handleTodoEdit(todo.id, newTodo);
  };

  return (
    <li className="todo">
      {isEditing ? (
        <EditTodo todo={todo} handleTodoEdit={handleTodoEdit} setIsEditing={setIsEditing}/>
      ) : (
        <TodoData
          todo={todo}
          handleCheckTodo={handleCheckTodo}
          handleTodoDelete={handleTodoDelete}
          setIsEditing={setIsEditing}
        />
      )}
    </li>
  );
};

export default Todo;
