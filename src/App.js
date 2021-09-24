import React,{useState} from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
       <h3>Counter</h3>
        <h5>{count}</h5>
        <div style={{display:'flex'}}>
        <button onClick={() => setCount(count +1)}>Incriment</button>&nbsp;
        <button onClick={() => setCount(count -1)}>Decriment</button>&nbsp;
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
