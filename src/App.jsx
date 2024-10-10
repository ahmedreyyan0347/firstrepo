import Main from "./components/Main"
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"
import './index.css'
import { useEffect, useState } from "react"


function App() {
// main component
const [data , setData]= useState(null)
const [loading ,setLoading] = useState(false)
  const [showModel , setShowModel] = useState(false)

  function handleDisplayModel(){
    setShowModel(!showModel)
  }
  
  

  useEffect(()=>{
    async function fetchApiData(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
console.log(NASA_KEY);
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=jDl4uBRHMEdXhdpPbz615fSFy7qT8C7xhgEOV4wr`


      const today = (new Date()).toDateString();
      const localKey  = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apidata = JSON.parse(localStorage.getItem(localKey));
        setData(apidata)
        return   
      }
      localStorage.clear()
      try {
        const response = await fetch(url);
        const apidata = await response.json();
        localStorage.setItem(localKey,JSON.stringify(apidata))
        setData(apidata)
        console.log('DATA\n', apidata);
         
        
      } catch (err) {
        console.log(err.message);
        
      }
    }
     fetchApiData()
  },[])
  return(
 <>
    {data?(<Main  data={data} />):(
      <div className="loadingState">
        <i className="fa-solid fa-gear"></i>
      </div>
    )}
   {showModel && <SideBar data={data} handleDisplayModel={handleDisplayModel}/>} 
   {data && (<Footer data={data} handleDisplayModel={handleDisplayModel}></Footer>
)}
 </>
  )
}

export default App
