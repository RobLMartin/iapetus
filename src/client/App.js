import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: blue;
`

class App extends Component {
    state = {
        name: 'rob'
    }
    
    render() {
    const { name } = this.state;
        return <Container>
                <h1>Hello, {name}!!</h1>
            </Container>
        

    }
}

export default App;