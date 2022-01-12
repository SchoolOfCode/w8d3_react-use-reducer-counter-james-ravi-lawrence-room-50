
import React, { useState,useReducer } from "react";

function countReducer(count,action){switch (action.type) {
  case 'increment':
  return count + 1;
  case 'decrement':
  return count - 1;
  default:
    throw new Error();
}
}


function Counter() {
const [count, dispatch] = useReducer(countReducer, 0);
return(
  <div>
          Count: {count}
          <button onClick={() => dispatch({type: 'decrement'})}>-</button>
          <button onClick={() => dispatch({type: 'increment'})}>+</button>
  </div>
  );
}

 export default Counter;
  
 
//   const [count, setCount] = useState(0);

//   function incrementCount() {
//     const updatedCount = count + 1;
//     setCount(updatedCount);
//   }

//   function decrementCount() {
//     const updatedCount = count - 1;
//     setCount(updatedCount);
//   }

//   return (
//     
//   );
// }




// const initialState = {count: 0};

// function reducer(state, action) {
//   ;
//   }
// }

// function Counter() {

//   
// }