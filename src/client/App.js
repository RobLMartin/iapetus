import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: blue;
`

class App extends Component {
    render() {
        return (
            <Container>
                <h1>Hello World!!</h1>
            </Container>
        );
    }
}

export default App;