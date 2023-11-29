import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const resultRef = useRef(null);
  const inputRef = useRef(null);

  const plus = (e) => {
    e.preventDefault();
    setResult(result + Number(inputRef.current.value));
  };

  const minus =(e) => {
    e.preventDefault();
    setResult(result - Number(inputRef.current.value));
  };

  const times =(e) => {
    e.preventDefault();
    setResult(result * Number(inputRef.current.value));
  };

  const divide =(e) => {
    e.preventDefault();
    setResult(result / Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(result => result * 0);
  } 




  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <h3 ref={resultRef}>Result: {result}</h3>
      <form>
        <label>Input</label>
        <input placholder="Type a number" type="number" pattern="[0-9]" ref={inputRef}  />
        <button onClick={plus}>Add</button>
      <button onClick={minus}>Subtract</button>
      <button onClick={times}>Multiply</button>
      <button onClick={divide}>Divide</button>
      <button onClick={resetInput}>Reset Input</button>
      <button onClick={resetResult}>Reset Result</button>
      </form>
      
      
    </div>
  );
}

export default App;
