import React from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material'
import memories from './images/memories.png'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color='inherit'>
        <Typography variant='h2' align='center'>Memories</Typography>
        <img src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xd={12} sm={7}>
              <Form/>
            </Grid>
            <Grid item xd={12} sm={4}>
              <Posts/>
            </Grid>
          </Grid>
        </Container>

      </Grow>
    </Container>
  )
}

export default App