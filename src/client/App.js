import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import NavBar from './components/Navigation/NavBar';
import Canvas from './components/Navigation/Canvas';

const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-areas: 
        'sidenav appbar' 
        'sidenav canvas';
    grid-template-columns: 55px 1fr;
    grid-template-rows: 55px 1fr;
`

const SideNav = styled(AppBar)`
    grid-area: sidenav;  
    background-color: #8862f1; 
    z-index: 10000;
     
`

const TopBar = styled(AppBar)`
    grid-area: appbar;    
    background-color: white;
`

class App extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Container>
                {/* <SideNav color="primary" position="relative" /> */}
                <NavBar></NavBar>
                <TopBar color="inhert" position="relative" classes={{ root: classes.root }} />
                <Canvas />
            </Container>
        )
    }
}
const styles = {
    root: {
        backgroundColor: "#242133"
    }
}

export default withStyles(styles)(App);