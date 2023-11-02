// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiCardStatus, emojiDetails, changingEmojisList} = props
  const {emojiUrl, emojiName, id} = emojiDetails
  const changeEmojiList = () => {
    changingEmojisList(id)
  }

  return (
    <li className="list-element">
      {emojiCardStatus && (
        <button type="button" className="emoji-card" onClick={changeEmojiList}>
          <img src={emojiUrl} alt={emojiName} className="emoji-card-image" />
        </button>
      )}
    </li>
  )
}

export default EmojiCard
