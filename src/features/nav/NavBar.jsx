import React from 'react';
import {Button, Container, Menu} from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/tbtlogo.png" alt="logo" style={{marginRight: 15}}/>
                    My Trip Plan
                </Menu.Item>
                <Menu.Item name="Trips"/>
                <Menu.Item name="Lists"/>
                <Menu.Item>
                    <Button positive inverted content='Create Trip'/>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Login' />
                    <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
                </Menu.Item>
            </Container>
        </Menu>
    );
}