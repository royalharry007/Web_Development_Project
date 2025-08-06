import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
 
  const [length , setLength] = useState(8);
  const [numAllowed , setnumAllowed]= useState(false)
  const [ charAllowed , setCharAllowed]= useState(false);
  const [password , setPassword] = useState("")
  const inputRef = useRef(null)


  const passwordGenerator = useCallback( () => {
    
    let pass=""
  
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    
    if(charAllowed) str +="!@#$%^&*" 

    for( let i=0; i<length; i++)
    {

     let charIndex = Math.floor(Math.random() * str.length);

     pass += str.charAt(charIndex)

    }
    setPassword(pass)
    
  } , [length , numAllowed, charAllowed])


  useEffect(() => {
  passwordGenerator();
}, [length, numAllowed, charAllowed, passwordGenerator]);

const copyToClipBoard = () =>{

 inputRef.current.select();
  navigator.clipboard.writeText(password)
}

  return (

        <div className='w-3xl h-70 bg-black rounded-xl ml-50'>
    <h1 className=' text-4xl text-white'> Password Generator </h1>

   <div className="flex items-center space-x-2 p-4 mt-4">
      <input
        type="text"
        ref={inputRef}
        value={password}
        placeholder="Enter text"
        readOnly
        className="border border-gray-300 rounded-lg px-3 py-2 bg-white ml-40 w-80"
      />
      <button
      onClick={copyToClipBoard}
       className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Copy
      </button>
    </div>

    <div className='flex flex-row items-center gap-2 ml-45 mt-2'>
      <input 
      type="range"
      min = {6}
      max = {100}
      value={length}
      className='cursor-pointer'
      onChange={ (e) => {setLength(e.target.value)}}
       />
    
      <label className='text-white'> Length: {length}  </label>

      <input 
      type="checkbox"
      id='numInput'
      defaultChecked={numAllowed}
      onChange={ () =>
      {
        setnumAllowed( (prev) => !prev)
      }}
  
       />
       <label htmlFor='numInput' className=' text-white'>Numbers</label>
        <input 
      type="checkbox"
      id='charInput'
      defaultChecked={numAllowed}
      onChange={ () =>
      {
        setnumAllowed( (prev) => !prev)
      }}
  
       />
       <label htmlFor='charInput' className=' text-white'>Character</label>
    </div>
 </div>
 
  )
}

export default App
