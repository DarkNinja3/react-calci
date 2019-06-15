import React from 'react'
import { Block } from './block.js'

export default function NumOpCont(props) {
  return (
    <div class="num-cont">      
      <Block numop="X" eventHandler={props.clear}/>
      <Block numop="/" eventHandler={props.eventHandler}/>
      <Block numop="*" eventHandler={props.eventHandler}/>
      <Block numop="-" eventHandler={props.eventHandler}/>
      <Block numop="+" eventHandler={props.eventHandler}/>
      <Block numop="=" eventHandler={props.eval}/>
      <Block numop="1" eventHandler={props.eventHandler}/>
      <Block numop="2" eventHandler={props.eventHandler} />
      <Block numop="3" eventHandler={props.eventHandler} />
      <Block numop="4" eventHandler={props.eventHandler}/>
      <Block numop="5" eventHandler={props.eventHandler}/>
      <Block numop="6" eventHandler={props.eventHandler}/>
      <Block numop="7" eventHandler={props.eventHandler}/>
      <Block numop="8" eventHandler={props.eventHandler}/> 
      <Block numop="9" eventHandler={props.eventHandler}/>
      <Block numop="0" eventHandler={props.eventHandler}/>
      <Block numop="." eventHandler={props.eventHandler}/>
    </div>
  )
}
