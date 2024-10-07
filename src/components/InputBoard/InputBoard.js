import React from 'react'
import './InputBoard.css'
import InputButton from '../InputButton/InputButton'

const InputBoard = ({ okClick, clearClick, valueClick, thrownScore }) => {

  return (
    <div className='input-wrapper'>
        <div className='input-row score-row'>
            <div>{thrownScore}</div>
        </div>
        <div className='input-row'>
            <InputButton handleClick = {valueClick} value={1} className='input-btn'/>
            <InputButton handleClick = {valueClick} value={2} className='input-btn'/>
            <InputButton handleClick = {valueClick} value={3} className='input-btn'/>
        </div>
        <div className='input-row'>
            <InputButton handleClick = {valueClick} value={4} className='input-btn'/>
            <InputButton handleClick = {valueClick} value={5} className='input-btn'/>
            <InputButton handleClick = {valueClick} value={6} className='input-btn'/>
        </div>
        <div className='input-row'>
            <InputButton handleClick = {valueClick} value={7} className='input-btn'/>
            <InputButton handleClick = {valueClick} value={8} className='input-btn'/>
            <InputButton handleClick = {valueClick} value={9} className='input-btn'/>
        </div>
        <div className='input-row'>
            <InputButton handleClick = {clearClick} value={'Clear'} className='input-btn'/>
            <InputButton handleClick = {valueClick} value={0} className='input-btn'/>
            <InputButton handleClick = {okClick} value={'Ok'} className='input-btn'/>
        </div>
    </div>
  )
}

export default InputBoard