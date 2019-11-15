import * as React from 'react'
import './Row.css'

export default function Text(props) {
  return (
    <div className="row">
      {props.children}
    </div>
  )
}