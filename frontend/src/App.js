import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MessageForm from './components/MessageForm';
import Admin from './components/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MessageForm />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
