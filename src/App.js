import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Animals from "./Animals";

//API URL
const url = "https://zoo-animal-api.herokuapp.com/animals/rand/5";

function App() {
  const [loading, setLoading] = useState(true);
  const [animals, setAnimals] = useState([]);

  const fetchAnimals = async () => {
    setLoading(true);
    const response = await fetch(url);
    const animals = await response.json();
    console.log(animals);
    setLoading(false);
    setAnimals(animals);
  };

  useEffect(() => {
    fetchAnimals();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }
  return (
    <main>
      <Animals animals={animals}></Animals>
      <div>
        <button className="refresh-btn" onClick={fetchAnimals}>New Animal</button>
      </div>
    </main>
  );
}

export default App;
