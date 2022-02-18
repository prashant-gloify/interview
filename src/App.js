import React, { Component } from 'react';
import { Route, Switch, Link, Routes} from 'react-router-dom';
import './App.css';
import Home from './container/Home';
import About from './container/About';
import Contact from './container/Contact';

function App() {
  return (
    <main>
      <div>
        <Link to="/">Home </Link>
        <Link to="/about">About Us </Link>
        <Link to="/contact">contact </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={Error} />
      </Routes>
    </main>
  );
}

export default App;
