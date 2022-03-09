import { useState } from 'react';

function App() {
  return (
    <div>
      <h1>React App</h1>
      <p>Introduce a number to the input field</p>
      <Calculator />
    </div>
  );
}

function Calculator() {
  const [opt, setOpt] = useState(37);
  const [res, setRes] = useState();

  function handleChange(e) {
    let num = e.target.value;
    if (!num)
      setRes();
    else
      setRes(num*opt);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Select a number" onChange={handleChange}></input>
        <button onClick={() => setOpt(37)}>x 37</button>
        <button onClick={() => setOpt(41)}>x 41</button>
      </form>
      <div>{res}</div>
    </div>
  );
}

export default App;
