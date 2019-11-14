import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
const xhttp = new XMLHttpRequest()
let data = {}
xhttp.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200) {
    data = JSON.parse(xhttp.responseText)
    ReactDOM.render(<App data={JSON.stringify(data)}/>, document.getElementById('root'))
  }
}

xhttp.open("GET", `${process.env.PUBLIC_URL}/data.json`)
xhttp.send()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
