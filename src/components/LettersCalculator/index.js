import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  anupuma = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="container">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="kl">Enter the phrase</label>
          <br />
          <input
            type="text"
            className="input"
            id="kl"
            placeholder="Enter the phrase"
            onChange={this.anupuma}
            value={inputPhrase}
          />

          <div className="container12">
            <p className="head">No.of letters: {inputPhrase.length}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img"
        />
      </div>
    )
  }
}

export default LettersCalculator
