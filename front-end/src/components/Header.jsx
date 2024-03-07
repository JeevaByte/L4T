import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logoimg from '../img/finallogoimage.png'

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <header className='position-relative'>
      <div className="container">
        <nav className='nav-bar'>
          <div className="logo">
            <img src={logoimg} alt='logo' width="90px" height="90px" />
            <h2 className='m-0'> <CustomLink to="/" className='logo'>learn4tomorrow</CustomLink></h2>
          </div>
          <div className='nav-links'>
            <ul>
              <li><Link to='/aboutus'>About us</Link></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <div className='search-bar-container'>
              <div>
                <div className="search-bar">
                  <div className="drop">
                    <div className="dropdown-t">
                    <button  type="button" onClick={toggleMenu}>Projects</button>
                    <i id="icon" className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className={`dropdown-m ${isMenuVisible ? 'dropdown-m--visible' : 'dropdown-m--block'}`}>
                      <li><a href="#">Projects</a></li>
                      <li><a href="#">Jobs</a></li>
                    </div>
                  </div>
                  <div className="search-box">
                    <input type="text" id="search-input" placeholder="Search anything..." />
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
              </div>
              <div>
                <CustomLink to="/login" className='custom-btn'>Login</CustomLink>
              </div>
              <div>
                 <CustomLink to="/signup" className='custom-btn'>Sign up</CustomLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}


function CustomLink({to ,children, ...props}){
  const resolvedpath = useResolvedPath(to)
  const isActive = useMatch({path:resolvedpath.pathname , end:true})

  return (
      <Link className={isActive ?'active':''} to={to} {...props}>
         {children}
      </Link>
  )
}

export default Header;