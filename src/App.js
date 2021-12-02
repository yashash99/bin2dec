import { Container, CssBaseline, Divider, Stack } from '@mui/material';
import React from 'react';
import './App.css';
import Bin2Dec from './Bin2Dec';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      {
        <Container maxWidth="sm">
          <Stack spacing={2}>
            <h1>Binary to decimal</h1>
            <Divider />
            <Bin2Dec></Bin2Dec>
          </Stack>


        </Container>
      }
    </React.Fragment>

  );
}

export default App;
