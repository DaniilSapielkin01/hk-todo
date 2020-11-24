import React, { useState } from "react";

export const TaskInput = ({ handleAllDelete, addTask, handleAll }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };
  return (
    <div className="task-input">
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
      </form>
      <button onClick={handleSubmit}>Add ➕</button>
      <button onClick={handleAll}>All done ✔️ </button>
      <button onClick={handleAllDelete}>All delete ❌ </button>
    </div>
  );
};
