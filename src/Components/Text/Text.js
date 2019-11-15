import * as React from 'react'
import './Text.css'


export default function Text(props) {
  return (
    <div className="text" style={props.style}>
      {props.children}
    </div>
  )
}