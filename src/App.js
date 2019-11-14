import { Container } from '@material-ui/core'
import * as React from 'react'
import './App.css'
import SectionSelector from './Components/SectionSelector/SectionSelector'

export default function App(props) {
  const [data, setData] = React.useState(JSON.parse(props.data))
  const [section, setSection] = React.useState('averages')

  console.log(data)

  return (
    <Container style={{backgroundColor: '#eee', minHeight: '100vh', padding: `5%` }} >
      <SectionSelector section={section} onClick={setSection}/>
    </Container>
  )
}
