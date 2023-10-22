/* eslint-disable react/prop-types */
import Todo from "./todo";

const Todos = ({ todos, handleTodoDelete,handleTodoEdit }) => {
  return (
    <ul className="todos">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleTodoDelete={handleTodoDelete}
          handleTodoEdit={handleTodoEdit}
        />
      ))}
    </ul>
  );
};

export default Todos;
