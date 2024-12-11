import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState("");

  const data = [
    { word: "react", meaning: "A JavaScript library for building user interfaces." },
    { word: "component", meaning: "A reusable building block in React." },
    { word: "state", meaning: "An object that stores data for a component." },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const foundWord = data.find((item) => item.word === input.toLowerCase());

    if (foundWord) {
      setDisplay(foundWord.meaning);
    } else {
      setDisplay("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h2>Dictionary App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a word"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h4>Definition: {display}</h4>
    </div>
  );
}

export default App;
