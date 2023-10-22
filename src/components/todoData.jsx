/* eslint-disable react/prop-types */
import { BiEdit, BiTrash } from "react-icons/bi";

const TodoData = ({ todo,handleCheckTodo, handleTodoDelete,setIsEditing}) => {

    
  return (
    <>
      <input
        id={`inp-${todo.id}`}
        type="checkbox"
        className="todo__checkbox"
        checked={todo.completed}
        onChange={handleCheckTodo}
      />
      <label className="todo__label" htmlFor={`inp-${todo.id}`}>
        {todo.title}
      </label>
      <button className="todo__edit-button" onClick={()=> setIsEditing(true)}>
        <BiEdit size="1.5em" color="var(--primary-color)" />
      </button>

      <button
        className="todo__delete-button"
        onClick={() => handleTodoDelete(todo.id)}
      >
        <BiTrash size="1.5em" color="var(--red)" />
      </button>
    </>
  );
};

export default TodoData;
