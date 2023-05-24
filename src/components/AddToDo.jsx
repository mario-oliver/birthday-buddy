import React, { useState } from 'react';

const AddToDo = ({ onAddTodo }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
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
        <input
          placeholder="Add Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        ></input>
      </div>
      <button
        className="btn"
        onClick={() => {
          setName('');
          setAge('');
          onAddTodo(name, age);
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddToDo;
