//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Icon, Container, Content, Thumbnail,Header, Left, Right, Body } from 'native-base';
import CardComponent from '../CardComponent';
//import { Header, Left, Right, Body } from '../../node_modules/react-navigation'
//import { Header } from '../../../Library/Caches/typescript/2.6/node_modules/@types/react-navigation';

// create a component
class HomeTab extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{
                color: tintColor
            }} />
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left> <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} /></Left>
                    <Body><Text>Instagram</Text></Body>
                    <Right> <Icon name="ios-send-outline" style={{ paddingRight: 10 }} /></Right>
                </Header>
                <Content>
                    <View style={{ height: 100 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
                            <Text style={{ fontWeight: 'bold' }}> Stories </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name='md-play' style={{ fontSize: 14 }} />
                                <Text style={{ fontWeight: 'bold' }}> Watch All </Text>
                            </View>
                        </View>
                        <View style={{ flex: 3 }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={{

                                alignItems: 'center', paddingStart: 5, paddingEnd: 5
                            }}>
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'black', borderWidth: 1 }}
                                    source={{ uri: "https://randomuser.me/api/portraits/thumb/men/14.jpg" }}></Thumbnail>
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'black', borderWidth: 1 }}
                                    source={{ uri: "https://randomuser.me/api/portraits/thumb/women/15.jpg" }}></Thumbnail>
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'black', borderWidth: 1 }}
                                    source={{ uri: "https://randomuser.me/api/portraits/thumb/women/16.jpg" }}></Thumbnail>
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'black', borderWidth: 1 }}
                                    source={{ uri: "https://randomuser.me/api/portraits/thumb/men/17.jpg" }}></Thumbnail>
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'black', borderWidth: 1 }}
                                    source={{ uri: "https://randomuser.me/api/portraits/thumb/men/18.jpg" }}></Thumbnail>
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'black', borderWidth: 1 }}
                                    source={{ uri: "https://randomuser.me/api/portraits/thumb/women/18.jpg" }}></Thumbnail>
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'black', borderWidth: 1 }}
                                    source={{ uri: "https://randomuser.me/api/portraits/thumb/men/28.jpg" }}></Thumbnail>
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: 'black', borderWidth: 1 }}
                                    source={{ uri: "https://randomuser.me/api/portraits/thumb/women/19.jpg" }}></Thumbnail>

                            </ScrollView>
                        </View>
                    </View>
                    <CardComponent imageSource="1" likes="101" />
                    <CardComponent imageSource="2" likes="101" />
                    <CardComponent imageSource="3" likes="101" />
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});

//make this component available to the app
export default HomeTab;
