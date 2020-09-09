import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import { LwPTheme } from '../palette.js';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
    },
  }));
  
export default function AddAChildCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}> 
            <h2>Add another child</h2>
            <p>You'll need a class code from your teacher to get started.</p>
            <Button variant="contained" color="primary">Add child</Button>
        </Card>
      );
}