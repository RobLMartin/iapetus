import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    grid-area: canvas;  
`

class Canvas extends Component {
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }
}

export default Canvas