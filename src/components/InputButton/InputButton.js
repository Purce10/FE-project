import React from 'react'
import './InputButton.css'

const InputButton = ({ handleClick, value }) => {
  return (
    <>
        <button onClick={handleClick} value={value} className='input-btn'>{value}</button>
    </>
  )
}

export default InputButton