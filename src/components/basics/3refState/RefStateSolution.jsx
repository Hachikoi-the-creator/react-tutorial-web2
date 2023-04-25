import { useRef, useState } from "react";

/* 1. Link the inputs to state & show new values when the button is clicked */
export default function RefStateSolution() {
  const nameRef = useRef()
  const ageRef = useRef()
  const [clicked, setClicked] = useState(false)

  return (
    <div className="container">
      <h1>Learning useRef VS useState</h1>
      <input type="text" name="name" ref={nameRef} />
      <input type="text" name="age" ref={ageRef} />
      {/* if it exist, give me the value attr */}
      <p>name {nameRef.current?.value} - age {ageRef.current?.value}</p>
      <button type="button" onClick={() => setClicked(prev => !prev)}>Show updates</button>
    </div>
  );
}
