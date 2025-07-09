import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TempleList from './pages/TempleList';
import TempleDetail from './pages/TempleDetail';
import AddTemple from './pages/AddTemple';

function ShivTempleApp() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temples" element={<TempleList />} />
        <Route path="/temple/:id" element={<TempleDetail />} />
        <Route path="/add-temple" element={<AddTemple />} />
      </Routes>
    </Router>
  );
}

export default ShivTempleApp;