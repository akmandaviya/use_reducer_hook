import React, { useReducer} from 'react'

const App = () => {

const initialState = 0;
const reducer = (currState, action) => {
  console.log(currState, action)
  if(action.type === "INCREMENT") {
    return currState + 1;
  }
  else {
    return currState - 1;
  }
  return currState;
}

  // const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(reducer, initialState); //(function, state)


  return (
    <div>
      <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
      <h2>{state}</h2>
      <button onClick={() => dispatch({type : "DECREMENT"})}>Decrement</button>
    </div>
  )
}

export default App

// useReducer Hook is similar to the useState Hook.
// It allows for custom state logic.
// useReducer is preferable over useSate ,when we have complex state logic
// also used to optimize performance
