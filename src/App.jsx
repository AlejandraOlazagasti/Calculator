import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import ClearButton from './components/ClearButton'
import Screen from './components/Screen'
import { evaluate } from 'mathjs'

function App() {
  
  const [input, setInput] = useState('')

  const addInput = value => {
    setInput(input + value)
  }

  const calcularResult = () =>{
    if(input){
      setInput(evaluate(input))
    } else {
      alert('Please enter values to perform the calculations')
    }
  }

  return (
    <div className="App">
      <div className='calculator-container'>
        <Screen input={input}/>
        <div className='row'>
          <Button manejarClic={addInput}>1</Button>
          <Button manejarClic={addInput}>2</Button>
          <Button manejarClic={addInput}>3</Button>
          <Button manejarClic={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button manejarClic={addInput}>4</Button>
          <Button manejarClic={addInput}>5</Button>
          <Button manejarClic={addInput}>6</Button>
          <Button manejarClic={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button manejarClic={addInput}>7</Button>
          <Button manejarClic={addInput}>8</Button>
          <Button manejarClic={addInput}>9</Button>
          <Button manejarClic={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button manejarClic={calcularResult}>=</Button>
          <Button manejarClic={addInput}>0</Button>
          <Button manejarClic={addInput}>.</Button>
          <Button manejarClic={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton manejarClear={() => setInput('')} />
        </div>
      </div>
    </div>
  )
}

export default App
