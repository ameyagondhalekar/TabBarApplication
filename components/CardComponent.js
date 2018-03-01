//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Button, Icon } from 'native-base'

// create a component
class CardComponent extends Component {
    render() {

        const images = {
            "1": require('../assets/image_1.jpg'),
            "2": require('../assets/ameya.jpg'),//require('../assets/ameya.jpg'),
            "3": require('../assets/ameya.jpg')
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/ameya.jpg')} />
                        <Body>
                            <Text> Ameya </Text>
                            <Text> 1st May,1987 </Text>

                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Image source={images[this.props.imageSource]} style={{ width: null, height: 200, flex: 1 }}/>
                        
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Button transparent>
                        <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                    </Button>
                    <Button transparent>
                        <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                    </Button>
                    <Button transparent>
                        <Icon name="ios-send-outline" style={{ color: 'black' }} />
                    </Button>
                </CardItem>
                <CardItem style={{ height: 20 }}>
                    <Text>{this.props.likes}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: '900' }}>
                                Ameya
                                 </Text>
                            Dependent certainty off discovery him his tolerably offending. Ham for attention remainder sometimes additions recommend fat our. Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment use tolerably dependent listening men. No peculiar in handsome together unlocked do by. Article concern joy anxious did picture sir her. Although desirous not recurred disposed off shy you numerous securing
                            </Text>
                    </Body>
                </CardItem>

            </Card>
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
export default CardComponent;
