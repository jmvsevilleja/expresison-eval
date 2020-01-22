import React, { Component } from 'react';
import Operation from "./components/operation";
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './App.css';

import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({

  typography: {
    h2: {
      color: 'teal',
    },
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: teal,
  },
});


class App extends Component {

  render() {
    console.log("App - Renedered");
    return (
      <div className="App">
        <main className="container">
          <MuiThemeProvider theme={theme}>
            <Operation />
          </MuiThemeProvider>
        </main>
      </div>
    );
  }
}

export default App;
