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

    // Normalize the input for case-insensitive comparison
    const searchWord = input.trim().toLowerCase();

    // Check if input matches a word in the dictionary
    const foundWord = data.find((item) => item.word === searchWord);

    if (foundWord) {
      setDisplay(foundWord.meaning);
    } else {
      setDisplay("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App" style={{ fontFamily: "Arial, sans-serif", textAlign: "center", marginTop: "20px" }}>
      <h2>Dictionary App</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search for a word"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "8px", width: "200px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>
          Search
        </button>
      </form>
      <h4>Definition:</h4>
      <p style={{ fontSize: "18px", color: "blue" }}>{display}</p>
    </div>
  );
}

export default App;
