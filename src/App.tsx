import { useState } from 'react';
import './App.css'
import React from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
    <title>Descendants</title>
    <p>Riding it crazy style!</p>
    <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
           </div>
</div>


  )
}

export default App
