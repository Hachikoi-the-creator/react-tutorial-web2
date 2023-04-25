import { useState } from "react";

/*
* 1. Make a function that increments the bears amount by 7
* 2. Make another function that resets the amount of bears
* 3. Show the amount of bears inside the p tag
*/
export default function StateSolution() {
  const [bears, setBears] = useState(0);

  // 1
  const incrementBy7 = () => {
    // this is best practice when you need the previous value
    setBears(prev => prev + 7)
    // setBears(bears + 7)
  }

  // 2
  const resetBears = () => {
    setBears(0)
  }

  return (
    <div className="container">
      <h1>Learning useState</h1>
      <p>{bears}</p>
      <button onClick={incrementBy7} className="btn-1">Increment by 7 </ button>
      <button onClick={resetBears} className="btn-2">Reset</button>
    </div>
  );
}
