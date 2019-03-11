import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';

const Container = styled(AppBar)`
    width: ${p => (p.isOpen ? '250px' : '55px')} !important;
    transition: width 0.5s;
    background-color: white;
    position: absolute;
    z-index: 1000000;
    height: 100%;
    overflow: hidden;
`

const ButtonContainer = styled.div`
    height: 55px;
    width: 55px;
    margin-top: auto;
`

class NavBar extends Component {
    state = {
        isOpen: false
    }

    handleOpenDrawer = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        const { isOpen } = this.state;
        const { classes, navigation } = this.props;
        return <Container isOpen={isOpen} classes={{ root: classes.root }}>
            <ButtonContainer>
                <Button classes={{ root: classes.button }} onClick={this.handleOpenDrawer}></Button>
            </ButtonContainer>
        </Container>
    }
}

const styles = {
    root: {
        left: 0,
        zIndex: 1101
    },
    button: {
        height: "55px",
        width: "250px",

    }
}

export default withStyles(styles)(NavBar);