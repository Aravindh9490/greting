import './index.css'

const PageView = props => {
  const {greetingList, activeTab, onChangeButton} = props
  const {buttonText, id} = greetingList

  const onClickButton = () => {
    onChangeButton(id)
  }

  const style = activeTab === id ? 'bg-btn' : null

  return (
    <li className="btn">
      <button
        className={`red-btn ${style}`}
        onClick={onClickButton}
        type="button"
      >
        {buttonText}
      </button>
    </li>
  )
}

export default PageView
