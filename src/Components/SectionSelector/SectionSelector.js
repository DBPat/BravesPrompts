import * as React from 'react'
import { Container, Button, ButtonGroup } from '@material-ui/core'
import './SectionSelector.css'

export default function SectionSelector(props) {
  const {onClick, section} = props

  return (
    <Container>
      <ButtonGroup className="buttonGroup" size="medium" margin="dense" color="primary" aria-label="medium outlined button group">
        <Button disabled={section === 'averages'} variant={section === 'averages' ? 'outlined' : 'contained'} color={section === 'averages' ? '' : 'primary'} onClick={() => onClick('averages')}>Player Averages</Button>
        <Button disabled={section === 'outcomes'} variant={section === 'outcomes' ? 'outlined' : 'contained'} color={section === 'outcomes' ? '' : 'primary'} onClick={() => onClick('outcomes')}>Player At Bat Outcomes</Button>
      </ButtonGroup>
    </Container>
  )
}