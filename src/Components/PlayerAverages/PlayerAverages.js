import * as React from 'react'
import { Container, MenuItem, Select } from '@material-ui/core'
import Text from './../Text/Text'
import Row from './../Row/Row'
import './PlayerAverages.css'

export default function PlayerAverages(props) {
  const {averages} = props

  const [batter, setBatter] = React.useState(averages[0])

  console.log("Batting Outcones", batter)

  return (
    <Container className="averagesContainer">
      <Text>Select a batter: {createDropdown()}</Text>
      <h2>Player Batting Averages</h2>
      <Row>
        <Text>
          Exit Direction: {batter.EXIT_DIRECTION.toFixed(2) || 0}°
        </Text>
        <Text>
          Exit Speed: {batter.EXIT_SPEED.toFixed(2) || 0}
        </Text>
      </Row>
      <Row>
        <Text>
          Hang Time: {batter.HANG_TIME.toFixed(2) || 0}
        </Text>
        <Text>
          Launch Angle: {batter.LAUNCH_ANGLE.toFixed(2) || 0}°
        </Text>
      </Row>
      <Row>
        <Text>
          Hit Spin Rate: {batter.HIT_SPIN_RATE.toFixed(2) || 0}
        </Text>
        <Text>
          Hit Distance: {batter.HIT_DISTANCE.toFixed(2) || 0}
        </Text>
      </Row>
    </Container>
  )


  function createDropdown() {
    return (
      <Select value={batter} onChange={e => setBatter(e.target.value)} className='dropdown'>
        {
          averages.map(average => <MenuItem key={average.BATTER_ID} value={average}>{average.BATTER}</MenuItem>)
        }
      </Select>
    )
  }
}