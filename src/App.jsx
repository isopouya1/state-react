import { useState } from 'react'
import './App.css'

function App() {

  const [conut , setcount] = useState(0)
  const increase = () =>{
    setcount(conut+1);
  }
  const decrease = ()=> {
    setcount(conut - 1)
  }
  const setZero = () => {
    setcount(0)
  }

  return (
    <>
    <h1>{count}</h1>
    <button OnClick={increase}>increase</button>
    <button OnClick={decrease}>set to 0</button>
    <button OnClick={setZero}>decrease</button>
    </>

  )
}

export default App
