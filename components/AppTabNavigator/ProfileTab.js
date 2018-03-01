//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native';
import { Icon, Container, Content, Header, Left, Body, Right, Button } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import CardComponent from '../CardComponent'

var images = [
    "https://randomuser.me/api/portraits/thumb/men/14.jpg",
    "https://randomuser.me/api/portraits/thumb/women/14.jpg",
    "https://randomuser.me/api/portraits/thumb/men/15.jpg",
    "https://randomuser.me/api/portraits/thumb/women/15.jpg",
    "https://randomuser.me/api/portraits/thumb/men/16.jpg",
    "https://randomuser.me/api/portraits/thumb/women/16.jpg",
    "https://randomuser.me/api/portraits/thumb/men/17.jpg",
    "https://randomuser.me/api/portraits/thumb/women/17.jpg",
    "https://randomuser.me/api/portraits/thumb/men/18.jpg",
    "https://randomuser.me/api/portraits/thumb/women/18.jpg"
]

var { width, height } = Dimensions.get('window')
// create a component
class ProfileTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="person" style={{
                color: tintColor
            }} />
        )
    }

    constructor(props) {
        super(props)

        this.state = {
            activeIndex: 0
        }
    }

    segmentClicked = (index) => {
        this.setState({
            activeIndex: index
        })
    }

    renderSectionOne = () => {

        return images.map((image, index) => {
            return (
                <View key={index} style={[{ width: (width) / 3 }, { height: (width / 3) }, { marginBottom: 2 },
                index % 3 != 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                    <Image style={{ flex: 1, width: undefined, height: undefined }} source={{ uri: image }}></Image>
                </View>
            )
        })
    }

    renderSection = () => {
        if (this.state.activeIndex == 0) {
            return (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {this.renderSectionOne()}
                </View>
            )
        } else if (this.state.activeIndex == 1) {
            return (
                <View>
                    <CardComponent imageSource="1" likes="101" />
                    <CardComponent imageSource="2" likes="101" />
                    <CardComponent imageSource="3" likes="101" />
                </View>
            )
        }
    }

    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: 'white' }} >
                <Header>
                    <Left> <Icon name="md-person-add" style={{ paddingLeft: 10 }} /></Left>
                    <Body><Text>Instagram</Text></Body>
                    <Right> <EntypoIcon name="back-in-time" style={{ paddingRight: 10, fontSize: 32 }} /></Right>
                </Header>
                <Content>
                    <View style={{ paddingTop: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image source={require('../../assets/ameya.jpg')} style={{ height: 75, width: 75, borderRadius: 37.5 }} />
                            </View>
                            <View style={{ flex: 3 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>20</Text><Text style={{ fontSize: 10, color: 'grey' }}>posts</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>2006</Text><Text style={{ fontSize: 10, color: 'grey' }}>followers</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>206</Text><Text style={{ fontSize: 10, color: 'grey' }}>following</Text>
                                    </View>

                                </View>
                                <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                    <Button bordered dark style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}>
                                        <Text>Edit Profile</Text>
                                    </Button>
                                    <Button bordered dark style={{ flex: 3, marginLeft: 5, marginRight: 10, justifyContent: 'center', height: 30 }}>
                                        <Icon name="settings"></Icon>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingLeft: 10, paddingHorizontal: 10, paddingVertical: 10 }}>
                            <Text style={{ fontWeight: 'bold' }}>Ameya Gondhalekar</Text>
                            <Text>Associate Lead Engineer</Text>
                            <Text>www.shaadi.com</Text>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: 'lightgrey' }}>

                                <Button transparent
                                    onPress={() => this.segmentClicked(0)}
                                    active={this.state.activeIndex == 0}>
                                    <Icon name="ios-apps-outline" style={[this.state.activeIndex == 0 ? {} : {
                                        color: 'grey'
                                    }]}></Icon>
                                </Button>

                                <Button transparent onPress={() => this.segmentClicked(1)}
                                    active={this.state.activeIndex == 1}>
                                    <Icon name="ios-list-outline" style={[this.state.activeIndex == 1 ? {} : {
                                        color: 'grey'
                                    }]}></Icon>
                                </Button>
                                <Button transparent onPress={() => this.segmentClicked(2)}
                                    active={this.state.activeIndex == 2}>
                                    <Icon name="ios-people-outline" style={[this.state.activeIndex == 2 ? {} : {
                                        color: 'grey'
                                    }]}></Icon>
                                </Button>
                                <Button transparent onPress={() => this.segmentClicked(3)}
                                    active={this.state.activeIndex == 3}>
                                    <Icon name="ios-bookmark-outline" style={[this.state.activeIndex == 3 ? {} : {
                                        color: 'grey'
                                    }]}></Icon>
                                </Button>
                            </View>
                        </View>
                        {this.renderSection()}
                    </View>
                </Content>
            </Container>
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
export default ProfileTab;
