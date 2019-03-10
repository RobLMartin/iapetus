import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";

const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-areas: 
        'sidenav appbar' 
        'sidenav canvas';
    grid-template-columns: 50px 1fr;
    grid-template-rows: 50px 1fr;
`

const SideNav = styled(AppBar)`
    grid-area: sidenav;  
    background-color: #8862f1; 
    z-index: 10000;
     
`

const Canvas = styled.div`
    grid-area: canvas;    
`

const TopBar = styled(AppBar)`
    grid-area: appbar;    
    background-color: white;
`

class App extends Component {

    render() {

        return (
            <Container>
                <SideNav color="secondary" position="relative" />
                <TopBar color="inhert" position="relative" />
                <Canvas />
            </Container>
        )
    }
}

export default App;