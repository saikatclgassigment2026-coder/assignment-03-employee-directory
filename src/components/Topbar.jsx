import React from 'react';
import { LayoutDashboard, Users, Settings, Bell, Search } from 'lucide-react';
import '../styles/Topbar.css';

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="topbar-logo">
        <div className="logo-icon">
          <LayoutDashboard size={24} />
        </div>
        <span className="logo-text">HRMS</span>
      </div>
      
      <div className="topbar-search">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Quick search..." className="search-input" />
      </div>

      <div className="topbar-actions">
        <button className="action-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>
        <button className="action-btn">
          <Settings size={20} />
        </button>
        <div className="user-profile">
          <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" className="avatar" />
          <div className="user-info">
            <span className="user-name">Admin User</span>
            <span className="user-role">HR Manager</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
