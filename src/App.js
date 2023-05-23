import { useState } from "react";
import "./styles.css";

export default function App() {
  // Hello
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  return (
    <div className="App">
      <h1>
        Hello {fName} {lName}{" "}
      </h1>

      <input
        type="text"
        placeHolder="First Name"
        onChange={(e) => setFName(e.target.value)}
      ></input>

      <input
        type="text"
        placeHolder="Last Name"
        onChange={(e) => setLName(e.target.value)}
      ></input>
    </div>
  );
}
