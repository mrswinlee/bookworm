import React from 'react';

function Navbar() {
  return (
    <div className='Navbar' 
    style={{
        display: 'flex',
        justifyContent: 'right'
      }}>
        <li><a>books</a></li>
        <li>Favorites</li>
        <li>login</li>
    </div>
  );
}

export default Navbar;
