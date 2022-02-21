import React from 'react';
import { Route, Link, Routes} from 'react-router-dom';
import './App.css';
import Home from './container/Home';
import About from './container/About';
import Contact from './container/Contact';
import Login from './container/Login';
import Navbar from './components/Navbar';
import QuestionContainer from './components/QuestionContainer';
import { Box } from '@chakra-ui/react';
import TankYou from './components/ThankYou';

function App() {
  return (
    <main>
      <Navbar />
      {/* <Box p={4}>
        <QuestionContainer 
          question="What is react ?" 
          questionNumber='1'
          timeRemaining='2:00'
        >
        </QuestionContainer>
      </Box> */}
      
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
