// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  getGeneratNum = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="app-container">
        <div className="random-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Genrate a random number in the range between 0 to 100
          </p>
          <button type="button" className="button" onClick={this.getGeneratNum}>
            Generate
          </button>
          <p className="random-num">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
