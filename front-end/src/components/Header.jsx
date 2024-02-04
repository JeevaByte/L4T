import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className='nav-bar'>
          <div className="logo">
            <h2 className='m-0'> <CustomLink to="/" className='logo'>learn4tomorrows</CustomLink></h2>
          </div>
          <div className='nav-links'>
            <ul>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <div className='search-bar-container'>
              <div>
                <div className="search-bar">
                  <div className="dropdown">
                    <div id="drop-text" className="dropdown-text">
                      <span id="span">Projects</span>
                      <i id="icon" className="fa-solid fa-chevron-down"></i>
                    </div>
                    <ul id="list" className="dropdown-list">
                      <li className="dropdown-list-item">Projects</li>
                      <li className="dropdown-list-item">Jobs</li>
                    </ul>
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
