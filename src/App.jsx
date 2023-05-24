import { useState } from 'react';
import { birthdaysAlreadyAdded, birthdaysToAdd } from './data';
import List from './components/BirthdayList';
import ToDoList from './components/ToDoList';

const App = () => {
  const [people, setPerson] = useState(birthdaysAlreadyAdded);
  const [newBirthdays, setNewBirthdays] = useState(birthdaysToAdd);

  let handleRemoveAll = () => {
    setPerson([]);
  };

  let handleAddAllNewBirthdays = (newBirthdaysList) => {
    console.log('ADDING ALL NEW BIRTHDAYS');
    console.log(newBirthdaysList, people);
    let newPeople = [...people];
    newBirthdaysList.map((birthday) => {
      let newObj = {
        id: birthday.id,
        name: birthday.name,
        age: birthday.age,
        img: `https://www.course-api.com/images/people/person-4.jpeg`, //        img: `https://www.course-api.com/images/people/person-${4}.jpeg`,
      };
      newPeople.push(newObj);
    });
    setPerson([...newPeople]);
  };

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Birthdays This Month!</h3>
          <List people={people} />
          <button
            type="button"
            className="btn btn-block"
            onClick={handleRemoveAll}
          >
            Remove All
          </button>
        </section>

        <section className="container">
          <ToDoList
            newBirthdays={newBirthdays}
            addAllNewBirthdays={handleAddAllNewBirthdays}
          />
        </section>
      </main>
    </>
  );
};
export default App;
