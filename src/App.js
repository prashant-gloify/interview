import React from 'react';
import { Route, Link, Routes} from 'react-router-dom';
import './App.css';
import Home from './container/Home';
import About from './container/About';
import Contact from './container/Contact';
import Login from './container/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route element={Error} />
      </Routes>
    </main>
  );
}

export default App;
