import { useState } from 'react'

/*
* 1. Make a function that increments the bears amount by 7
* 2. Make another function that resets the amount of bears
* 3. Show the amount of bears inside the p tag
*/

export default function StateProblem() {
  const [bears, setBears] = useState(0)

  return (
    <div className='container'>
      <p>Currently have: {bears} bears</p>
      <button>Increment by 7</button>
      <button>reset</button>
    </div>
  )
}
