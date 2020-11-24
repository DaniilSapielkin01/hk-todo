import React from "react";

export const Task = ({ hadleClickTask, deleteTask, task, ...props }) => {
  const ActionBtn = () => (
    <div className="action-btn">
      {!task.done ? (
        <p onClick={() => hadleClickTask(task.id)}>✔️ </p>
      ) : (
        <p onClick={() => deleteTask(task.id)}>❌</p>
      )}
    </div>
  );
  const className = `task ${task.done ? "task-done" : ""}`;

  return (
    <div className={className}>
      <p>{task.title}</p>
      <ActionBtn></ActionBtn>
    </div>
  );
};
