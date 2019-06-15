import React from 'react'
import ReactDOM from 'react-dom'
import Container from './container'
import './index.css'

// View responsible for displaying the numbers
class View extends React.Component {

  render() {
    return (
      <div class="view">
          {this.props.value}
      </div>
    )
  }
}

//The overall calculator app
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: "0" }
    this.eventHandler = this.eventHandler.bind(this)
    this.eval = this.eval.bind(this)
    this.clear = this.clear.bind(this)
  }

  //Handles clicks of simple blocks
  eventHandler(e) {
    e.persist()
    this.setState(
      function (state, props) {
        return (
          { value: (state.value.toString() + e.target.getAttribute('name').toString()) }
        )
      }
    )
  }

  //Handles clicks of '='. Evaluates value of input
  eval(e) {
    e.persist()
    this.setState(
      function (state, props) {
        return (
          { value: eval((state.value))}
        )
      }
    )
  }

  //Handles click on 'X' block
  clear(e) {
    e.persist()
    this.setState(
      function (state) {
        return (
          {value: state.value.toString().split('').reverse().splice(1).reverse().join('')}
        )
      }
    )
  }

  render() {
    return (
      <div class="calc">
        <View value={this.state.value}/>        
        <Container clear={this.clear} eval={this.eval} eventHandler={this.eventHandler}/>
      </div>
    )
  }
}


ReactDOM.render(
  <Calculator/>,
  document.getElementById('root')
)
    