import { useRef } from "react";

/*
* 1. Keep track of name input without re-renders 
* 2. If another console.log appears means there was another re-render
* 3. Console log to verify you have a hold of the value of the input
*/
export default function RefProblem() {
  console.log("re-render")

  return (
    <div className="container">
      <h1>Learning useRef</h1>
      <input type="text" />
      <button type="button">Check Value</button>
    </div>
  );
}
