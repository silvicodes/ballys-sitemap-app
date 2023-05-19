import React from 'react';

const Header = ({ title }) => {
  return (
    <header>
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" /> {/* Note the change here */}
        <h1>{title}</h1>
      </div>
    </header>
  );
};

export default Header;
