import React, { useState } from 'react';
import AddToDo from './AddToDo';

const ToDoList = ({ newBirthdays }) => {
  const [newBirthdaysList, setNewBirthdaysList] = useState(newBirthdays);

  function handleAddToDo(name) {
    console.log(name);
    setNewBirthdaysList([
      ...newBirthdaysList,
      {
        id: 6,
        name: name,
        age: 600,
      },
    ]);
  }
  return (
    <label>
      <h3>Input to Add</h3>
      <AddToDo onAddTodo={handleAddToDo}></AddToDo>
      <div>
        <h3>Birthday's to Add</h3>
        <ul>
          <li>
            <label>
              {newBirthdaysList.map((newBirthday) => {
                console.log(newBirthday);
                return (
                  <div key={newBirthday.id}>
                    <h4>Name: {newBirthday.name}</h4>
                    <h4>Age: {newBirthday.age}</h4>

                    <button className="btn">Edit</button>
                    <button className="btn">Delete</button>
                  </div>
                );
              })}
            </label>
          </li>
        </ul>
        <button className="btn btn-block">Add to List</button>
      </div>
    </label>
  );
};

export default ToDoList;
