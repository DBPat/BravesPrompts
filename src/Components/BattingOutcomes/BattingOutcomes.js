import * as React from 'react'
import { Container, MenuItem, Select } from '@material-ui/core'
import { RadialChart } from 'react-vis'
import Text from './../Text/Text'
import Row from './../Row/Row'
import './BattingOutcomes.css'

export default function BattingOutcomes(props) {
  const {outcomes} = props

  const [batter, setBatter] = React.useState(outcomes[0])

  console.log("Batting Outcones", outcomes[0])

  return (
    <Container className="container">
      <Text>Select a batter: {createDropdown()}</Text>
      <Row>
        <Text>
          Singles: <span>{batter.Single || 0}</span>
        </Text>
        <Text>
          Doubles: <span>{batter.Double || 0}</span>
        </Text>
        <Text>
          Triples: <span>{batter.Triple || 0}</span>
        </Text>
      </Row>
      <Row>
        <Text>
          Home Runs: <span>{batter.HomeRun || 0}</span>
        </Text>
        <Text>
          Outs: <span>{batter.Out || 0}</span>
        </Text>
      </Row>
      {renderPieChart()}
      <Text style={{marginTop: '8px'}}><strong>Note:</strong> These outcomes only include hits that resulted in a player on base, home run or out.</Text>
    </Container>
  )

  function renderPieChart() {

    const data = []

    if(batter.Single) data.push(
      {
        label: `Singles (${Math.round((batter.Single / batter.Total) * 100)}%)`,
        angle: batter.Single,
        radius: 20,
      }
    )
    if(batter.Double) data.push(
      {
        label: `Doubles (${Math.round((batter.Double / batter.Total) * 100)}%)`,
        angle: batter.Double,
        radius: 20,
      }
    )
    if(batter.Triple) data.push(
      {
        label: `Triples (${Math.round((batter.Triple / batter.Total) * 100)}%)`,
        angle: batter.Triple,
        radius: 20,
      }
    )
    if(batter.HomeRun) data.push(
      {
        label: `Home Runs (${Math.round((batter.HomeRun / batter.Total) * 100)}%)`,
        angle: batter.HomeRun,
        radius: 20,
      }
    )
    if(batter.Out) data.push(
      {
        label: `Outs (${Math.round((batter.Out / batter.Total) * 100)}%)`,
        angle: batter.Out,
        radius: 20
      }
    )

    return (
      <RadialChart
        className='chart'
        data={data}
        width={450}
        height={300} 
        showLabels
        labelsRadiusMultiplier={1.1}
        labelsStyle={{fontWeight: 600}}
      />
    )
  }

  function createDropdown() {
    return (
      <Select value={batter} onChange={e => setBatter(e.target.value)} className='dropdown'>
        {
          outcomes.map(outcome => <MenuItem key={outcome.BATTER_ID} value={outcome}>{outcome.BATTER}</MenuItem>)
        }
      </Select>
    )
  }
}