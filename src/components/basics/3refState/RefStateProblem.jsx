import { useRef, useState } from "react";

/* 1. Link the inputs to state & render new values in the p tag when the button is clicked */
export default function RefStateProblem() {
  const nameRef = useRef()
  const ageRef = useRef()

  return (
    <div className="container">
      <h1>Learning useRef VS useState</h1>
      <input type="text" name="name" />
      <input type="text" name="age" />
      {/* if it exist, give me the value attr */}
      <p>name {nameRef.current?.value} - age {ageRef.current?.value}</p>
      <button>Show updates</button>
    </div>
  );
}
