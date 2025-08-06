import { useState } from "react";

export default function Counter() {

  let counter = 10;
  
    let [count , setCount]=useState(0);

  // this is the function to increase the value 
    const addValue =()=>{
    
if( count < 10 )
    setCount( count +1);

  }

  const removeValue = ()=>
  {
   
    if( count > 0 )
     setCount( count - 1);

  }


  
  return (
    <div>

      <h1>This is counter app : {count}</h1>

      <button onClick={addValue}> Add Value: {count} </button>
      <br/>
      <button onClick={removeValue}> Decrease Value:{count} </button>

    </div>


  );

}