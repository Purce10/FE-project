import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const headerStyle = {
  textDecoration: 'none'
}

const linkStyle = {
  color: 'white',
  fontSize: '16px',
  textDecoration: 'none',
  justifySelf: 'center',
  alignSelf: 'center'
}

const Nav = () => {
  return (
    <nav className='nav-bar'>
      <Link to='/' style={headerStyle}>
        <h1 className='nav-header'>Darts<span className='nav-word'>Tracker</span></h1>
      </Link>
      <ul>
        <li className='nav-link'>Games</li>
        <li className='nav-link'>Log In</li>
        <button className='nav-button'>
          <Link to='/upgrade' style={linkStyle}>Upgrade to Pro</Link>
        </button>
      </ul> 
    </nav>
  )
}

export default Nav