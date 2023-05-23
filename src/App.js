import { useState } from "react";
import "./styles.css";

export default function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  
  function changeFName(event){
    setFName(event.target.value)
  }
  
    function changeLName(event){
    setLName(event.target.value)
  }

  return (
    <div className="App">
      <h1>
        Hello {fName} {lName}{" "}
      </h1>

      <input
        type="text"
        placeHolder="First Name"
        onChange={changeFName}
      ></input>

      <input
        type="text"
        placeHolder="Last Name"
        onChange={changeLName}
      ></input>
    </div>
  );
}
