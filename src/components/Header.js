import React from 'react';

import Logo from '../assets/logo1.svg'

const Header = () => {
  return ( <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href="https://google.com" onClick={handleClick}>
            <img src={ Logo } alt="Logo" className="w-24 h-auto" />
          </a>
          <button className='btn btn-sm'>Let's connect</button>
        </div>  
      </div> 
    </header>
  );
};

export default Header;
