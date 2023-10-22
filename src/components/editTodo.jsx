/* eslint-disable react/prop-types */
import { useState } from "react";

const EditTodo = ({ todo, handleTodoEdit, setIsEditing }) => {
  const [editValue, setEditValue] = useState(todo.title);

  const handleSave = () => {
    setIsEditing(false);
    const newTodo = {
      ...todo,
      title: editValue,
    };
    handleTodoEdit(todo.id, newTodo);
  };

  return (
    <>
      <input
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        className="todo__input"
        type="text"
      />
      <button onClick={handleSave} className="save-btn">
        save
      </button>
    </>
  );
};

export default EditTodo;
