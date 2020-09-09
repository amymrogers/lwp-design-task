import { createMuiTheme } from '@material-ui/core/styles';

export const LwPTheme = createMuiTheme({
  palette: {
    primary: {main: '#F28D00', dark: '#D17A00'},
    pastel: {orange: '#FDF1E0'},
    neutral: {blueblack: '#00303C'},
  },
  
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Verdana"',
    ].join(','),
  },

  overrides: {
    MuiButton: {
      root: {
        padding: '16px 48px',        
      },
      containedPrimary: {
        color: '#000000',
        fontFamily: 'Verdana',
        fontWeight: 'bold',
        fontSize: '14px',
        textTransform: 'none',
      },
    },
    MuiCard: {
      root: {
        boxShadow: '0px 4px 8px rgba(214, 209, 203, 0.5)',   
      }
    },
    MuiCardContent: {
      root: {
        padding: '16px 20px',
        '&:last-child': {
          paddingBottom: '16px'
        } 
      },
    },
  },
});