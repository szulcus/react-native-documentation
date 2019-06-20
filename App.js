import React, { Component } from 'react';
// import { AppRegistry, Image } from 'react-native';
import { AppRegistry, Text, View } from 'react-native'

// class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//         <Image source={pic} style={{width: 193, height: 110}} />
//       );
//   }
// }

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: "center"}}>
        <Text>Cześć {this.props.name}!</Text>
      </View>
    );
  }
}

class LostOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='Jakub' />
        <Greeting name='Paulina' />
        <Greeting name='Sabina' />
      </View>
    );
  }
}

export default LostOfGreetings