import React, { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input != "") {
      setTaskList([...taskList, input]);
      setInput("");
    }
  };

  return (
    <>
      <form className="row1">
        <input
          type="text"
          className="form-control"
          placeholder="Enter The Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          ADD
        </button>
      </form>
    </>
  );
};

export default Input;
