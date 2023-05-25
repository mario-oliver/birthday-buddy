import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let result = await fetch(url);
        if (!result.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        let user = await result.json();
        console.log(user);
        setUser(user);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) return <h2>There was an error</h2>;

  return (
    <section className="container">
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </section>
  );
};
export default MultipleReturnsFetchData;
