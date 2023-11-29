import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const resultRef = useRef();
  const inputRef = useRef();
  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <h3>Result: 0</h3>
      <form>
        <label>Input</label>
        <input placholder="Type a number" type="number" pattern="[0-9]"  />
        <button>Add</button>
      <button>Subtract</button>
      <button>Multiply</button>
      <button>Divide</button>
      <button>Reset Input</button>
      <button>Reset Result</button>
      </form>
      
      
    </div>
  );
}

export default App;
