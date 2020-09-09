import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { LwPTheme } from '../palette.js';
import Mathscot from '../../images/mathscot.png'
import English from '../../images/english.png'

const useStyles = makeStyles((theme) => ({
  root: {
    transition: '0.35s',
        '&:hover': {
          transform: 'translateY(-4px)',
          cursor: 'pointer',
        },
  },
  media: {
    height: 200,
    //paddingTop: '80%', // 16:9 '56.25%'
    background: LwPTheme.palette.pastel.orange,
    backgroundSize: 'contain',
    //backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center',
    textAlign: 'center',
    paddingTop: '10%',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '1000px',
  },

  mathscot: {
    height: '85%',
    width: 'auto',
  },
}));

export default function ChildCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={English}
      >
        <img className={classes.mathscot} src={Mathscot}/>
      </CardMedia>
      <CardContent className={classes.content}>
        <h3>{props.childName}</h3>
        <ChevronRightIcon />
      </CardContent>      
    </Card>
  );
}