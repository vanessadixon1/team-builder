import React, { useState } from 'react';
import Form from './Form';
import Memebers from './Members';
import './App.css';

function App() {
  const [memebers, setMembers ] = useState([])
  console.log(memebers)

  const createNewPerson = person => {
   setMembers([...memebers,{name: person.name, email: person.email, role:person.role}])
  }
  

  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <Form createNewPerson={createNewPerson}/>
      <Memebers memebers={memebers}/>

 
      
      
    </div>
  );
}

export default App;
