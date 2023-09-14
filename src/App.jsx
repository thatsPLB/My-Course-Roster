import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Head from './Components/Header/Head'
import SelectArea from './Components/Select/SelectArea'

function App() {
  const [area, setArea] = useState([]);
  const [CreditHourRemaining, setCreditHourRemaining]= useState(20)
  const handleAddToArea = blog =>{
    const newArea =[...area, blog];
    setArea(newArea);

  }

  const handlecredit = time =>{
    console.log('object',time);
  }

  return (
    <>
    <Head></Head>
    <div>
    <Blogs handleAddToArea={handleAddToArea}
    handlecredit={handlecredit}></Blogs>
    <SelectArea area={area} ></SelectArea>
    </div>
    
    </>
  )
}

export default App
