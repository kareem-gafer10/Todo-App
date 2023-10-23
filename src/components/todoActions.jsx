/* eslint-disable react/prop-types */
const TodoActions = ({
  len,
  filteredLen,
  handleTodoClear,
  handleToggleCheckAll,
}) => {
  return (
    <div className="meta">
      <div className="progress-wrapper">
        <progress value={filteredLen} max={len}>
          {filteredLen} / {len} completed
        </progress>
        <span>
          {filteredLen} / {len} completed
        </span>
      </div>
      <div className="actions">
        <button className="actions__clear-btn" onClick={handleTodoClear}>
          clear
        </button>
        <button className="actions__check-btn" onClick={handleToggleCheckAll}>
         Toggle check all
        </button>
      </div>
    </div>
  );
};

export default TodoActions;
