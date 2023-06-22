import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

import './Header.css';
import BcitLogo from '../../assets/icons/BcitLogo';

export default function Header() {  
    // hook to get current route
    const cRoute = useLocation();
  
    // from the route object we can get the pathname
    // console.log(cRoute);

  return (
    <div className='head-bar'>
      <div className='head-brand'>
        <BcitLogo className="head-logo" />

        <div className='head-title'>
          <div>MDIA 3295</div>
          <div>App Development Strategy 2</div>
        </div>
      </div>

      <div className='nav-menu'>
        <li className={'nav-item'} >
          <Link
            to="/"
            className={(cRoute.pathname === '/' || cRoute.pathname === '/home') ? 'nav-link-curr' : 'nav-link'}
          >
            Home
          </Link>
        </li>        

        <li className={'nav-item'} >
          <Link
            to="/todo"
            className={(cRoute.pathname === '/todo') ? 'nav-link-curr' : 'nav-link'}
          >
            ToDo App
          </Link>
        </li>

        <li className={'nav-item'} >
          <Link
            to="/recipe"
            className={(cRoute.pathname === '/recipe') ? 'nav-link-curr' : 'nav-link'}
          >
            Recipe API
          </Link>
        </li>
      </div>
    </div>

  );
}

