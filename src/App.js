import "./App.css";
import React, { useState } from "react";
import Person from "./Person/Person.js";
function App() {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 26 },
      { name: "Stephanie", age: 27 },
    ],
    otherState: "some other value",
    showPersons: false,
  });

  const switchNameHandler = (newName) => {
    setPersonState({
      persons: [
        { name: newName, age: 28 },
        { name: "Nam", age: 26 },
      ],
    });
  };
  const nameHandler = (e) => {
    setPersonState({
      persons: [
        { name: "Hoa", age: 28 },
        { name: e.target.value, age: 26 },
      ],
    });
  };

  const togglePersonHandler = () => {
    const doesShow = personState.showPersons;
    setPersonState({ showPersons: !doesShow });
  };
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };
  return (
    <div className="App">
      <h1>Hi, i'm React</h1>
      <button style={style} onClick={togglePersonHandler}>
        Switch Name
      </button>
      {personState.showPersons ? (
        <div>
          <Person
            click={() => switchNameHandler}
            name={personState.persons[1].name}
          />
          <Person
            changed={nameHandler}
            click={switchNameHandler}
            name={personState.persons[1].name}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
