import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [randomGreeting, setRandomGreeting] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/v1/greetings/random_greeting')
      .then((response) => response.json())
      .then((data) => {
        setRandomGreeting(data.greeting);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Random Greetings</h1>
      <h4>Everytime you reload the page you'll see a new greeting!</h4>
      <p>{randomGreeting}</p>
    </div>
  );
};

export default Greeting;
