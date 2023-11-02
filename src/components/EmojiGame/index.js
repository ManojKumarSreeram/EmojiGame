import './index.css'

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    navStatus: true,
    emojiCardStatus: true,
    emojisListContainer: this.props,
    score: 0,
    scoreCard: [],
    totalScore: 0,
    scoreCardStatus: false,
    winLoss: false,
  }

  changingEmojisList = id => {
    const {scoreCard, totalScore, score} = this.state
    if (scoreCard.includes(id)) {
      if (totalScore < score) {
        this.setState({
          emojiCardStatus: false,
          totalScore: score,
          scoreCardStatus: true,
          winLoss: false,
          navStatus: false,
        })
      }
    } else if (score < 11) {
      const shuffledEmojisList = () => {
        const {emojisList} = this.props
        return emojisList.sort(() => Math.random() - 0.5)
      }
      const modifiedList = {emojisList: shuffledEmojisList()}

      this.setState(prevState => ({
        emojisListContainer: modifiedList,
        scoreCard: [...prevState.scoreCard, id],
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        emojiCardStatus: false,
        score: prevState.score + 1,
        totalScore: score + 1,
        scoreCardStatus: true,
        winLoss: true,
        navStatus: false,
      }))
    }
  }

  playAgainButton = () => {
    this.setState({
      emojisListContainer: this.props,
      score: 0,
      scoreCardStatus: false,
      emojiCardStatus: true,
      navStatus: true,
      scoreCard: [],
    })
  }

  render() {
    const {
      navStatus,
      emojiCardStatus,
      emojisListContainer,
      score,
      totalScore,
      scoreCardStatus,
      winLoss,
    } = this.state

    return (
      <div className="main-container">
        <NavBar navStatus={navStatus} score={score} totalScore={totalScore} />
        <div className="emoji-cards-won-lose-container">
          <ul className="unordered-list">
            {emojisListContainer.emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiDetails={eachEmoji}
                emojiCardStatus={emojiCardStatus}
                changingEmojisList={this.changingEmojisList}
              />
            ))}
          </ul>
          <div>
            {scoreCardStatus && (
              <WinOrLoseCard
                winLoss={winLoss}
                score={score}
                playAgainButton={this.playAgainButton}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
