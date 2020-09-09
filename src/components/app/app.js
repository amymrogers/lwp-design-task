import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ChildCard from '../cards/childCard';
import AddAChildCard from '../cards/addAChildCard';
import './app.css';
import { LwPTheme } from '../palette.js';

const useStyles = makeStyles((theme) => ({
  grid: {
    maxWidth: '850px',
    padding: theme.spacing(2),
    justifyItems: 'center',
  },

  headline: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },

  childCard: {
    padding: theme.spacing(1),
  },

  actionArea: {
    padding: theme.spacing(1),
  }
}));


function App() {
  const classes = useStyles();

  return (
    <Grid container 
        direction="row"
        justify="center"
        alignItems="center">
      <Grid container className={classes.grid}>
        <Grid xs={12} className={classes.headline}>
          <h1>Select a child</h1>
        </Grid>


        <Grid item xs={12} sm={6} className={classes.childCard}>
          <ChildCard childName='Harry Potter'/>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.childCard}>
          <ChildCard childName='Ronald Weasley'/>
        </Grid>
        
        <Grid item xs={12} sm={4} className={classes.childCard}>
          <ChildCard childName='Harry Potter'/>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.childCard}>
          <ChildCard childName='Ronald Weasley'/>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.childCard}>
          <ChildCard childName='Hermione Granger'/>
        </Grid>


        <Grid xs={12} className={classes.actionArea}>
          <AddAChildCard/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
