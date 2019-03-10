import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import './styles/style.sass'

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root'))