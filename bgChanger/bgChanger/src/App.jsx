import { useState } from 'react'


function App() {

   let [color , setColor]=useState("green")

   const updateRed = ()=>
   {
    setColor("red");
      
   }

    function updateYellow()
   {
      setColor("yellow");
   }

     function updateGreen()
   {
      setColor("green");
   }

     function updateBlue()
   {
      setColor("blue");
   }

     function updateOrange()
   {
      setColor("orange");
   }

   function updateOlive()
   {
    setColor("olive")
   }


  
  return (

    <div className='w-full h-screen  '
    style={{backgroundColor: color}}
    >
     <div className='flex flex-wrap  mb-10 bg-amber-50 fixed px-3 py-1 mt-6 rounded-xl ml-70'>
      
    <div className='flex flex-wrap justify-center gap-4 '>
        
        <button className='outline-none px-5 py-3 rounded-xl' 
         style={{backgroundColor : " red"}}
         onClick={updateRed}
         >Red</button>

          <button className='outline-none px-2 py-2 rounded-xl' 
         style={{backgroundColor : " Yellow"}}
         onClick={updateYellow}
         >Yellow</button>

          <button className='outline-none px-2 py-2 rounded-xl' 
         style={{backgroundColor : " Green"}}
         onClick={updateGreen}
         >Green</button>

          <button className='outline-none px-2 py-2 rounded-xl' 
         style={{backgroundColor : "Blue"}}
         onClick={updateBlue}
         >blue</button>

          <button className='outline-none px-2 py-2 rounded-xl' 
         style={{backgroundColor : "orange"}}
         onClick={updateOrange}
         >orange</button>

          <button className='outline-none px-2 py-2 rounded-xl' 
         style={{backgroundColor : "olive"}}
         onClick={updateOlive}

        
         >olive </button>

         
         </div>
      
       </div>


    </div>

  );
}

export default App
