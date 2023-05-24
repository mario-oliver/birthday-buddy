import React, { useState } from 'react';

const AddToDo = ({ onAddTodo }) => {
  const [name, setName] = useState('Placeholder');
  return (
    <>
      <div>
        <h4>Name</h4>
        <input
          placeholder="Add Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <h4>Age</h4>
        <input></input>
      </div>
      <button
        className="btn"
        onClick={() => {
          setName('');
          onAddTodo(name);
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddToDo;
