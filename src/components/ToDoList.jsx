import React from 'react';

const birthdaysToAdd = ['john', 'mary', 'steve'];

const ToDoList = () => {
  return (
    <label>
      <input></input>
      <button>Add</button>
      <div>
        <ul>
          <li>
            <label>
              hello
              <button>Edit</button>
            </label>
          </li>
        </ul>
      </div>
    </label>
  );
};

export default ToDoList;
