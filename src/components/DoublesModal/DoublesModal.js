import React from 'react'
import './DoublesModal.css'

const DoublesModal = ({ modalHandler }) => {
  return (
    <div className='modal-container fadeInUp-animation'>
        <p className='bullseye'/>
        <div className='modal-text'>
            How many darts thrown this turn?
        </div>
        <div className='modal-buttons'>
            <button className='modal-button modal-button-1' value='-2' onClick={modalHandler}>1</button>
            <button className='modal-button modal-button-2' value='-1' onClick={modalHandler}>2</button>
            <button className='modal-button modal-button-3' value='0' onClick={modalHandler}>3</button>
        </div>
    </div>
  )
}

export default DoublesModal