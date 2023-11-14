import React, { useState } from 'react';

const App = (props) => {
  const [counter, setCounter] = useState(0);

  let incrementCounter = () => {
    setCounter(pre => pre + 1);
  }
  const { color, size } = props;
  let colorStyle = { color, fontSize: size }
  return (
    <div style={colorStyle}>
      React Component
      <br /><br />
      <button onClick={incrementCounter}>Click Me!</button>
      <br /><br />
      {counter}
    </div>
  );
}

export default App;