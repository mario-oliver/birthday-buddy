import { useState } from 'react';
import data from './data';
import List from './components/List';

const App = () => {
  const [people, setPerson] = useState(data);

  let handleRemoveAll = () => {
    setPerson([]);
  };

  return (
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
    </main>
  );
};
export default App;