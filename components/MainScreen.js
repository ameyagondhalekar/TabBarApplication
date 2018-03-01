//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import { Icon } from 'native-base';
import {TabNavigator} from 'react-navigation'

import HomeTab from './AppTabNavigator/HomeTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'

// create a component
class MainScreen extends Component {

    // static navigationOptions = {

    //     headerLeft : <Icon name ="ios-camera-outline" style ={{paddingLeft : 10}}/>,
    //     title : "Instagram",
    //     headerRight : <Icon name="ios-send-outline" style ={{paddingRight : 10}}/>
    // }

    static navigationOptions = {

        header : null
    }

    render() {
        return (
            <AppTabNavigator />
        );
    }
}


const AppTabNavigator = TabNavigator({

    HomeTab: {
        screen : HomeTab
    },
    SearchTab : {
        screen : SearchTab
    },
    AddMediaTab : {
        screen : AddMediaTab
    },
    LikesTab : {
        screen : LikesTab
    },
    ProfileTab : {
        screen : ProfileTab
    }


},{
    animationEnabled : true,
    swipeEnabled : true,
    tabBarPosition : 'bottom',
    tabBarOptions :{
        style : {
            ...Platform.select({
                android :{
                    backgroundColor : 'white'
                }
            })
        },
        activeTintColor : '#000',
        inactiveTintColor : '#d1cece',
        showLabel : false,
        showIcon : true
    }
});

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
export default MainScreen;
