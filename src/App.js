import "./App.css";
import FullName from "./profile/profile component/FullName";
import Bio from "./profile/profile component/Bio";
import Profession from "./profile/profile component/Profession";
import React from "react";

function App() {
  function handleEvent(e) {
    e.preventDefault();
    alert(`Welcome to Ghayth Bel Hadj Younes profile`);
  }
  return (
    <div className="App">
      <FullName firstName="Ghayth" lastName="Bel Hadj Younes"></FullName>
      <Bio
        FullName="Ghayth Bel Hadj Younes"
        Age="26"
        Gender="Masculin"
        Interests="Eating and Sleeping"
      />
      <div id="profession">
        <Profession />
      </div>
      <button onClick={handleEvent} style={{marginTop:'1%',borderRadius:'100%',width:'300px',backgroundColor:'smoke'}}>Click Me</button>
      
    </div>
  );
}

export default App;

