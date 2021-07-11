import "./App.css";
import React, { useState } from "react";
import Radium from 'radium';
import Person from "./Person/Person.js";
function App() {
  const [personState, setPersonState] = useState({
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 26 },
    ],
    otherState: "some other value",
  });
  const [showForm, setShowForm] = useState({ showPersons: false });

  const deletePersonHandler = (personIndex) => {
    const persons = [...personState.persons];
    persons.splice(personIndex, 1);
    setPersonState({ persons: persons });
  };
  const changeNameHandler = (e, id) => {
    const personIndex = personState.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...personState.persons[personIndex] };
    person.name = e.target.value;
    const persons = [...personState.persons];
    persons[personIndex] = person;
    setPersonState({
      persons: persons,
    });
  };
  const togglePersonHandler = () => {
    const doesShow = showForm.showPersons;
    setShowForm({ showPersons: !doesShow });
  };
  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };
  let persons = null;
  if (showForm.showPersons) {
    persons = (
      <div>
        {personState.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(e) => changeNameHandler(e, person.id)}
            />
          );
        })}
      </div>
    );
    style.backgroundColor = "red";
  }
  let classes = [];
  if(personState.persons.length <= 2) {
    classes.push('red');
  }
  if(personState.persons.length <= 1) {
    classes.push('bold');
  }
  return (
    <div className="App">
      <h1>Hi, i'm React</h1>
      <p className={classes.join(' ')}>This is my course</p>
      <button style={style} onClick={togglePersonHandler}>
        Toggle person
      </button>
      {persons}
    </div>
  );
}

export default Radium(App);
