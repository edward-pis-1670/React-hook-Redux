import "./App.css";
import React, { useState } from "react";
import Person from './Person/Person.js'
function App() {

  const [personState, setPersonState] = useState({
    persons: [
      {name:'Max', age:28},
      {name:'Manu', age:26},
      {name:'Stephanie', age:27},

    ],
    otherState: 'some other value'
})

const switchNameHandler = (newName) => {
  setPersonState({
    persons: [
      {name:newName, age:28},
      {name:'Nam', age:26},

    ]
  })
}
const nameHandler = (e) => {
  setPersonState({
    persons: [
      {name:'Hoa', age:28},
      {name:e.target.value, age:26},

    ]
  })
}
  return <div className="App">
    <h1>Hi, i'm React</h1>
    <button onClick={() => switchNameHandler('Ngang')}>Switch Name</button>
    <Person click={() => switchNameHandler} name={personState.persons[0].name}/>
    <Person changed={nameHandler} click={switchNameHandler} name={personState.persons[1].name}/>
  </div>;
}

export default App;
