import React, { Component } from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

const Container = styled.div`
   height: 100vh;
   padding: 2em;
`

const StyledAppBar = styled(AppBar)`
    padding-left: 1em;
`

class App extends Component {

    render() {
        return (
            <Container>
                <StyledAppBar position="relative">
                    <h1>Hello, World!!!</h1>
                </StyledAppBar>
            </Container>
        )
    }
}

export default App;