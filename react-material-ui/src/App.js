import React from 'react';


import {Grid} from '@material-ui/core'
import './App.css';

import Header from './header/header';
import Content from './content/Content';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>{
return {
  itemStyles:{
    margin:theme.spacing(2)
  }
}
}) 
function App() {
  const classes = useStyles()
  return (
    <Grid container direction='column'>
      <Grid item xs={12}><Header/></Grid>
      <Grid item container className={classes.itemStyles}>
        <Grid item sm={2}  />
        <Grid item xs={12} sm={8}><Content/></Grid>
        <Grid item sm={2} />
      </Grid>
    </Grid>
  )
}

export default App;
