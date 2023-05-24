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
          <ToDoList newBirthdays={newBirthdays} />
        </section>
      </main>
    </>
  );
};
export default App;
