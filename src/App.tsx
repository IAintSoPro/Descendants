import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './pages/Home.tsx'; // Import the Home page
import About from './pages/About.tsx'; // Import the About page

function App() {
  return (
    <div>
      {/* Navigation Links */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;