import './App.css';
import Balance from './assets/balance'
import AsideMenu from './assets/asidemenu.js'
import * as React from 'react';
import { Grid } from '@mui/material';
import CustomizedTables from './assets/table'

function App() {  
  return (
    <div className='body'>
      <AsideMenu/>

      <Grid container spacing={2} className='header'>
        <Grid item >
          <h1>Crédito</h1>
        </Grid>
        <Grid item >
          <Balance/>
        </Grid>
          <Grid container spacing={0}>
            <Grid item sm >
              <CustomizedTables />
            </Grid>
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
