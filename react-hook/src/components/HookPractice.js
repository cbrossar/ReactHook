import React, { useState, useEffect } from 'react';

export default function HookPractice() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0); 
  const [person, setPerson] = useState(null); 
  const [loading, setLoading] = useState(true); 



  // This function is called everytime the component finished rendering
  useEffect( () => { 
    async function fetchData() {
        const response = await fetch("https://api.randomuser.me/");
        const data = await response.json();
        const [item] = data.results;
        setPerson(item)
        setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      { loading ? <div>loading... </div> : <div>{person.name.first}</div>}
    </div>
  );
}