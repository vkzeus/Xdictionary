import { useState } from "react";


function App() {
  const[input,setInput]=useState("");
  const[display,setDisplay]=useState("");
  
const data=[

  { word: "react", meaning: "A JavaScript library for building user interfaces." },

  { word: "component", meaning: "A reusable building block in React." },

  { word: "state", meaning: "An object that stores data for a component." }

]
const handleSubmit=(e)=>{
  e.preventDefault();
  
  if(input.toLowerCase()===data[0].word){
    setDisplay(data[0].meaning)
  }
  if(input.toLowerCase()===data[1].word){
    setDisplay(data[1].meaning)
  }
  if(input.toLowerCase()===data[2].word){
    setDisplay(data[2].meaning)
  }
  
}

  return (
    <div className="App">
      <h2>Dictionary App</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for a word" value={input} onChange={(e)=>setInput(e.target.value)}>
        </input>
      <button type="submit" >
        Search
      </button>
      <h4>Definition: {display} </h4>
      </form>
    </div>
  );
}

export default App;
