import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        Hello Swastik Mallik
      </p>
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;