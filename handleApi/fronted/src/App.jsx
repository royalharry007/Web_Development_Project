
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [products, setProducts] = useState([])
  // it is always better to put error on state 
  const [error, setError] = useState(false)
  const [loading , setLoading]= useState(false)
  const[search , setSearch] = useState('')

  useEffect(() => {

    (async () => {

      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products?search='+ search) // linking our input with api
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)

      } catch (error) {
        setError(true)
      }
    })()

  }, [search])

  
// if(error)
// {
//   return <h1>Something went Wrong... </h1>

// }
// // it run until the api get the data 
// if(loading){
//   return <h2>Loading...</h2>
// }

  return (
    <>
      <h1>This is react api handling </h1>
      <h2> Number of products are:{products.length} </h2>

        {loading && (<h1> Loading...</h1>)}
      {error && (<h2> something went wrong...</h2>)}
    
     
      <input
       type="text" 
       value ={search}
       onChange={(event) => setSearch(event.target.value)}
       />
    </>
  )
}

export default App
