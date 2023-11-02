// Write your code here.
import './index.css'

const NavBar = props => {
  const {navStatus, score, totalScore} = props

  const navBarStatus = () => {
    if (navStatus === true) {
      return (
        <nav className="navbar-container">
          <div className="emoji-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
              alt="emoji logo"
              className="logo-image"
            />
            <h1 className="emoji-pera">Emoji Game</h1>
          </div>
          <div className="emoji-score-container">
            <p className="score-pera">Score: {score}</p>
            <p className="score-pera">Top Score: {totalScore}</p>
          </div>
        </nav>
      )
    }
    return (
      <div className="navbar-container">
        <div className="emoji-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
            className="logo-image"
          />
          <p className="emoji-pera">Emoji Game</p>
        </div>
      </div>
    )
  }

  return <div>{navBarStatus()}</div>
}

export default NavBar
