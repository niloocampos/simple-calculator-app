import { useState, useRef } from 'react';
import './App.css';
import ButtonDigit from './components/ButtonDigit';
import ButtonOperation from './components/ButtonOperation';

function App() {
  const [valueOld, setValueOld] = useState(0);
  const [valueNew, setValueNew] = useState(0);
  const [operation, setOperation] = useState(null);

  return (
    <div className="App w-third">
      <form>
        <h1>Simple Calculator</h1>
        <div className="row">
          <input className="w-full" placeholder="Type a number" type="number" pattern="[0-9]" onChange={(value) => setValueNew(value.target.value)}  />
        </div>
        <div className="row">
          <ButtonDigit value={7} onClick={setValueNew} />
          <ButtonDigit value={8} onClick={setValueNew} />
          <ButtonDigit value={9} onClick={setValueNew} />
          <ButtonOperation label="/" value="divide" onClick={setOperation} />
        </div>
        <div className="row">
          <ButtonDigit value={4} onClick={setValueNew} />
          <ButtonDigit value={5} onClick={setValueNew} />
          <ButtonDigit value={6} onClick={setValueNew} />
          <ButtonOperation label="*" value="multiply" onClick={setOperation} />
        </div>
        <div className="row">
          <ButtonDigit value={1} onClick={setValueNew} />
          <ButtonDigit value={2} onClick={setValueNew} />
          <ButtonDigit value={3} onClick={setValueNew} />
          {
            // TODO: is there some parameter missing for doing a calculation here?
          }
          <ButtonOperation label="-" value="subtract" onClick={setOperation} />
        </div>
        <div className="row">
          <ButtonDigit value="" onClick={() => {}} />
          <ButtonDigit value={0} onClick={setValueNew} />
          <ButtonDigit value="" onClick={() => {}} />
          <ButtonOperation label="+" value="add" onClick={setOperation} />
        </div>
        <div className="row">
          <ButtonOperation label="=" value="equal" className="w-full" onClick={setOperation} />
        </div>
      </form>
    </div>
  );
}

export default App;
