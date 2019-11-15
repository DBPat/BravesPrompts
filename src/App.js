import * as React from 'react'
import { Container } from '@material-ui/core'

import BattingOutcomes from './Components/BattingOutcomes/BattingOutcomes'
import PlayerAverages from './Components/PlayerAverages/PlayerAverages'
import SectionSelector from './Components/SectionSelector/SectionSelector'
import './App.css'

export default function App(props) {
  const data = JSON.parse(props.data)
  const [section, setSection] = React.useState('averages')

  return (
    <Container className="container" >
      <SectionSelector section={section} onClick={setSection}/>
      {renderSelectedSection()}
    </Container>
  )

  function renderSelectedSection() {
    if(section === 'averages') {
      return  <PlayerAverages averages={data.averages}/>
    } else {
      return <BattingOutcomes outcomes={data.outcomes}/>
    }
  }
}
