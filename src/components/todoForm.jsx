/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoForm = ({ handleTodoAdd }) => {
  const [inpValue, setInpValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inpValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      title: inpValue,
      completed: false,
    };

    handleTodoAdd(newTodo);
    setInpValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <fieldset className="add-form__fieldset">
        <legend className="add-form__legend">Write a new todo item</legend>

        <input
          type="text"
          className="add-form__input"
          placeholder="Learn html"
          value={inpValue}
          onChange={(e) => setInpValue(e.target.value)}
        />
        <button className="btn btn--primary add-form__submit" type="submit">
          Add
        </button>
      </fieldset>
    </form>
  );
};

export default TodoForm;
