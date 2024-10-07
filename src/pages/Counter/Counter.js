import { useState }from 'react'
import './Counter.css'
import InputBoard from '../../components/InputBoard/InputBoard'
import DoublesModal from '../../components/DoublesModal/DoublesModal'

const Counter = () => {
  const [thrownScore, setThrownScore] = useState(0);
  const [playerOneScore, setPlayerOneScore] = useState(501);
  const [playerTwoScore, setPlayerTwoScore] = useState(501);
  const [playerOneLegs, setPlayerOneLegs] = useState(0);
  const [playerTwoLegs, setPlayerTwoLegs] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [playerOneDartsThrown, setPlayerOneDartsThrown] = useState(0);
  const [playerTwoDartsThrown, setPlayerTwoDartsThrown] = useState(0);
  const [playerOneTotalScore, setPlayerOneTotalScore] = useState(0);
  const [playerTwoTotalScore, setPlayerTwoTotalScore] = useState(0);
  const [winningLegs, setWinningLegs] = useState(1);
  const [finishedLeg, setFinishedLeg] = useState(false);

  const handleLegChange = (e) => {
    e.preventDefault()
    setWinningLegs(Number(e.target.value))
  }

  const valueClick = (e) => {
    if (thrownScore === 0) {
        setThrownScore(e.target.value)
    } else {
        setThrownScore(thrownScore + e.target.value)
    }
  }

  const okClick = () => {
    if(currentPlayer) {
      if(thrownScore > 180 || thrownScore > playerOneScore){
        window.alert('Score Invalid')
        setThrownScore(0)
      } else {
        setPlayerOneScore(playerOneScore - Number(thrownScore))
        setPlayerOneDartsThrown(playerOneDartsThrown + 3)
        setPlayerOneTotalScore(playerOneTotalScore + Number(thrownScore))
        setCurrentPlayer(!currentPlayer)
        setThrownScore(0)
      }
    } else {
        if(thrownScore > 180 || thrownScore > playerTwoScore){
          window.alert('Score Invalid')
          setThrownScore(0)
        } else {
          setPlayerTwoScore(playerTwoScore - Number(thrownScore))
          setPlayerTwoDartsThrown(playerTwoDartsThrown + 3)
          setPlayerTwoTotalScore(playerTwoTotalScore + Number(thrownScore))
          setCurrentPlayer(!currentPlayer)
          setThrownScore(0)
        }
    }
  }

  const clearClick = () => {
    setThrownScore(0)
  }

  const resetHandler = () => {
    setPlayerOneLegs(0)
    setPlayerTwoLegs(0)
    setPlayerOneTotalScore(0)
    setPlayerTwoTotalScore(0)
    setPlayerOneDartsThrown(0)
    setPlayerTwoDartsThrown(0)
    setCurrentPlayer(true)

    var btn3 = document.getElementsByClassName('input-btn');
    for (let i=0; i<btn3.length; i++ ){
      btn3[i].disabled=false
    }
  }

  const modalHandler = (e) => {
    if(currentPlayer){
      setPlayerTwoDartsThrown(playerTwoDartsThrown + Number(e.target.value))
    } else {
      setPlayerOneDartsThrown(playerOneDartsThrown + Number(e.target.value))
    }
    setFinishedLeg(false)
  }

  if(playerOneScore === 0) {
    setPlayerOneLegs(playerOneLegs + 1)
    setPlayerOneScore(501)
    setPlayerTwoScore(501)
    setFinishedLeg(true)
    if(playerOneDartsThrown <= playerTwoDartsThrown){
      setCurrentPlayer(true)
    } else {
      setCurrentPlayer(false)
    }
    } else if(playerTwoScore === 0) {
    setPlayerTwoLegs(playerTwoLegs + 1)
    setPlayerOneScore(501)
    setPlayerTwoScore(501)
    setFinishedLeg(true)
    if(playerTwoDartsThrown <= playerOneDartsThrown){
      setCurrentPlayer(false)
    } else {
      setCurrentPlayer(true)
    }
  }

  if(playerOneLegs === winningLegs){
    var btn1 = document.getElementsByClassName('input-btn');
    for (let i=0; i<btn1.length; i++ ){
      btn1[i].disabled=true
    }
  } else if (playerTwoLegs === winningLegs){
    var btn2 = document.getElementsByClassName('input-btn');
    for (let i=0; i<btn2.length; i++ ){
      btn2[i].disabled=true
    }
  }  

  return (
    <>
    <div className='counter-container' style={finishedLeg ? {opacity: '0.15'} : null}>
      <div className='leg-selector'>
        <p className='leg-selector-text'>Best of: </p>
        <select name='legs' className='leg-dropdown' onChange={handleLegChange}>
          <option value='1'>1 Leg</option>
          <option value='2'>3 Legs</option>
          <option value='3'>5 Legs</option>
          <option value='4'>7 Legs</option>
          <option value='5'>9 Legs</option>
          <option value='6'>11 Legs</option>
        </select>
        <button className='reset-btn' onClick={() => resetHandler()}>Reset Game</button>
      </div>
      <div className='player-container'>
        <div className='player-one player'>
            <div className='player-heading'>
                <p className='player-tag'>{playerOneLegs === winningLegs && '\u{1F451}'} Player 1</p>
            </div>
            <div className='counter-player1 player-score'>
              {currentPlayer ? <div className='player-indicator one-indicator'/> : null}
              {playerOneScore}
            </div>
            <div className='player-avg '>Avg: {playerOneDartsThrown === 0 ? '0' : ((playerOneTotalScore / playerOneDartsThrown) * 3).toFixed(2)}</div>
        </div>
        <div className='leg-container'>
            <div className='leg'>{playerOneLegs}</div>
            <p className='leg-icon'>L</p>
            <div className='leg'>{playerTwoLegs}</div>
        </div>
        <div className='player-two player'>
            <div className='player-heading'>
                <p className='player-tag'>Player 2 {playerTwoLegs === winningLegs && '\u{1F451}'}</p>
            </div>
            <div className='counter-player2 player-score'>
              {playerTwoScore}
              {!currentPlayer ? <div className='player-indicator two-indicator'/> : null}
            </div>
            <div className='player-avg '>Avg: {playerTwoDartsThrown === 0 ? '0' : ((playerTwoTotalScore / playerTwoDartsThrown) * 3).toFixed(2)}</div>
        </div>
      </div>
      <div className='counter-input'>
          <InputBoard okClick={okClick} clearClick={clearClick} valueClick={valueClick} thrownScore={thrownScore}/>
      </div>
    </div>
    {finishedLeg ? <DoublesModal modalHandler={modalHandler}/> : null}
    </>
  )
}

export default Counter