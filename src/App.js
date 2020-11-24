import React, { useState } from "react";

import "./App.css";
import { Task } from "./components/Task";
import { TaskInput } from "./components/TaskInput";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Create to do 1",
      done: false,
    },
    {
      id: 2,
      title: "Create to do 2",
      done: false,
    },
    {
      id: 3,
      title: "Create to do 3",
      done: false,
    },
  ]);

  const hadleClickTask = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const addTask = (value) => {
    if (!value) return;
    let copy = [...tasks];
    copy = [...copy, { id: tasks.length + 1, title: value, done: false }];
    setTasks(copy);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };
  const handleAll = () => {
    let copy = tasks.filter((task) =>
      task.done ? task.done : (task.done = !task.done)
    );
    setTasks(copy);
  };
  const handleAllDelete = () => {
    setTasks("");
  };
  return (
    <div className="App">
      <h1 className="top">Active tasks:  {tasks.length}</h1>
      <TaskInput
        addTask={addTask}
        handleAll={handleAll}
        handleAllDelete={handleAllDelete}
      />
      {tasks.length > 0
        ? tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              hadleClickTask={hadleClickTask}
              deleteTask={deleteTask}
            />
          ))
        : ""}
    </div>
  );
};

export default App;
