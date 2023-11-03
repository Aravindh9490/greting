import {Component} from 'react'
import Buttons from './component/Buttons'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTab: languageGreetingsList[0].id}

  onChangeButton = id => {
    this.setState({activeTab: id})
  }

  render() {
    const {activeTab} = this.state
    const [activeIndex] = languageGreetingsList.filter(
      each => each.id === activeTab,
    )

    return (
      <div className="bg1">
        <div>
          <h1>Multilingual Greetings</h1>
        </div>
        <ul className="unList">
          {languageGreetingsList.map(each => (
            <Buttons
              key={each.id}
              greetingList={each}
              activeTab={activeTab}
              onChangeButton={this.onChangeButton}
            />
          ))}
        </ul>
        <div>
          <img
            className="img"
            src={activeIndex.imageUrl}
            alt={activeIndex.imageAltText}
          />
        </div>
      </div>
    )
  }
}

export default App
