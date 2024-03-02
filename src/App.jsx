import Keys from "./keys"
import './App.css'
import { useState } from "react"

function App() {
  const [input, setInput] = useState('')
  function handleClick(value){
    setInput(input+value)
  }
  function handleClear(){
    setInput('')
  }
  function calculator(value){
    const evaluate = eval(input)
    setInput(evaluate)
  }
  return (
    <div className="container">
      <div className="containerRow">
        <h1>CALCULATOR USING REACT JS</h1>
        <input type="text" className='inputArea' value={input}/>
        <Keys handleClick={handleClick} handleClear={handleClear} calculator={calculator}></Keys>
        </div>
      </div>
  )
}

export default App
