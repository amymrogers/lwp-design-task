import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import App from './components/app/app.js';
import { LwPTheme } from './components/palette.js';


const classes = makeStyles((theme) => ({
  mainColumn: {
  }
}));

const PlaceholderApp = (
  <ThemeProvider theme={LwPTheme}>
    <div className={classes.mainColumn}>
      <App/>
    </div>
  </ThemeProvider>
  );

ReactDOM.render(
  PlaceholderApp,
  document.getElementById('root')
);
