//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Icon, Button } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo'

// create a component
class TransparentIconButton extends Component {

    
    render() {
        return (
            <Button transparent >
                <Icon name = {this.props.iconName} style={[this.props.activeIndex == 0 ? {} : {
                    color: 'grey'
                }]}></Icon>
            </Button>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default TransparentIconButton;
