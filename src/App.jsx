import "./App.css";

import React, { useState } from "react";
import Input from "./Input";
import Board from "./Board";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList);
  return (
    <>
      <div className="box bg-warning ">
        <h1 className="text-primary">TO-DO Board</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div className="container d-flex justify-content-evenly flex-wrap mt-5 mw-100">
        {taskList.map((task, index) => (
          <Board
            key={index}
            index={index}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
    </>
  );
};

export default App;
