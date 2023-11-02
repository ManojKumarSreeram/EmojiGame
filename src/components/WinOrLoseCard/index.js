// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {winLoss, score, playAgainButton} = props
  const winLossHead = winLoss ? 'You Won' : 'You Lose'
  const winLossPera = winLoss ? 'Best Score' : 'Score'
  const winLossImage = winLoss
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const clickButtonToPlay = () => {
    playAgainButton()
  }
  return (
    <div className="winLose-card">
      <div className="image-container">
        <img
          src={winLossImage}
          alt="win or lose"
          className="winLoseCard-image"
        />
      </div>
      <div className="win-loss-details">
        <h1 className="win-loss-head">{winLossHead}</h1>
        <p className="win-loss-pera-1">{winLossPera}</p>
        <p className="win-loss-pera-2">{score}/12</p>
        <button
          type="button"
          className="button-element"
          onClick={clickButtonToPlay}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLossCard
