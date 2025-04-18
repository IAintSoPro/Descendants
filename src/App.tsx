import { useState } from 'react';
import './App.css'
import React from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
    <title>Descendants</title>
    <p>Hello World!</p>
    <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
           </div>
</div>


  )
}

export default App
