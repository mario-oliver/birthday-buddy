import React, { useState } from 'react';
import AddToDo from './AddToDo';

const ToDoList = ({ newBirthdays, addAllNewBirthdays }) => {
  const [newBirthdaysList, setNewBirthdaysList] = useState(newBirthdays);
  const [newBirthdaysIndex, setNewBirthdayIndex] = useState(
    newBirthdaysList.length + 1
  );

  function handleAddToDo(name, age) {
    setNewBirthdaysList([
      ...newBirthdaysList,
      {
        id: newBirthdaysIndex,
        name: name,
        age: age,
      },
    ]);
    //TODO: error when adding more than 1 new item --> incorrectly using setState (check documentations)
    console.log(newBirthdaysList);
    let newIndex = newBirthdaysList.length + 1;
    setNewBirthdayIndex(newIndex);
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
        <button
          className="btn btn-block"
          onClick={() => {
            setNewBirthdaysList([]);
            addAllNewBirthdays(newBirthdaysList);
          }}
        >
          Add to List
        </button>
      </div>
    </label>
  );
};

export default ToDoList;
