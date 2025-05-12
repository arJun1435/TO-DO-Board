import React from "react";

const Board = ({ task, index, taskList, setTaskList }) => {
  const handleDelete = () => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTasks) =>
      currentTasks.filter((todo) => index === removeIndex)
    );
  };

  return (
    <>
      <div className="task p-2 border border-primary rounded w-25 m-2">
        <p>{task}</p>
        <div className="delete">
          <button className="btn btn-danger " onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Board;
