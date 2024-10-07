import React from 'react'
import './Home.css'
import dartboard from '../../Images/Dartboard-unsplash.jpg'
import { Link } from 'react-router-dom'

const linkStyle = {
  color: 'white',
  fontSize: '16px',
  textDecoration: 'none',
  justifySelf: 'center',
  alignSelf: 'center',
  listStyle: 'none'
}

const Home = () => {
  return (
    <>
      <header className='homepage'>
          <div className='copy-container'>
              <h2 className='copy-header'>Take your darts to the next level</h2>
              <p>Practice and play against friends</p>
              <button className='header-cta'>
                <Link to='/play-501' style= {linkStyle} className={"cta-link"}>Play 501</Link>
              </button>
          </div>
          <div className='image-container'>
            <img src={dartboard} alt='Dartboard' width='600' height='600' className='header-img'/>
            <div className='img-background'></div>
          </div>
      </header>
    </>
  )
}

export default Home