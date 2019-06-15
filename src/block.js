import React from 'react'

class Block extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value:''}
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(e) {
    this.props.eventHandler(e)   
  }

  render() {
    const numop= this.props.numop
    var class_ = ""
    switch (this.props.numop) {
      case '0': class_ = "zero"
        break;
      case "+": class_ = "plus"
        break;
      case '=':
        class_ = 'equals';
        break;
      case "X": class_ = 'numop clr'
        break;
      default: class_ = "numop"
    }

    if (numop === "/" || numop === "*" || numop === "-" || numop === "+" || numop === "=") {
      return (
        <div class={class_ + " ops"} onClick={this.handleClick} name={this.props.numop}>
          {this.props.numop}
        </div>
      )
    }
    return (
      <div class={class_ + "  nums"} onClick={this.handleClick} name={this.props.numop}>
        {this.props.numop}
      </div>
    )
  }
}

export {Block} 