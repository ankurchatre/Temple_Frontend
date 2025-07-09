import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="navbar">
        <h1 className="logo">🔱 Shiv Temples</h1>

        <div className="nav-links">
          <Link to="/">About</Link>
          <Link to="/temples">View Temples</Link>
          <Link to="/add-temple">Add Temple</Link>
        </div>

        <div className="menu-btn" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill=" #fdd835"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </div>
      </div>

      {/* Sidebar for mobile */}
      {sidebarOpen && (
        <div className="sidebar">
          <div className="close-btn" onClick={toggleSidebar}>✖</div>
          <Link to="/" onClick={toggleSidebar}>About</Link>
          <Link to="/temples" onClick={toggleSidebar}>View Temples</Link>
          <Link to="/add-temple" onClick={toggleSidebar}>Add Temple</Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
