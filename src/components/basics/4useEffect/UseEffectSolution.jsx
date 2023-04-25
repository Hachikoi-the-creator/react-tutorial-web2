import { useState, useEffect } from "react";


// Make a request to "https://jsonplaceholder.typicode.com/users" once the page loads 
// store the result in state
// render results in the page with .map()
export default function UseEffectSolution() {
  const [data, setData] = useState()

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(resData => setData(resData))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container">
      {data?.map(user => (<h2 key={user.name}>{user.name}</h2>))}
      {/* is the same but without explicit return (pick your fav) */}
      {/* {data?.map(user => { return (<h2>{user.name}</h2>) })} */}
    </div>
  );
}
