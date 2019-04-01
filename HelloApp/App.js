import React, { Component } from "react";
import { AppRegistry, ScrollView, Image, Text } from "react-native";

export default class Bananas extends Component {
  render() {
    let pic = {
      uri:
        "https://static.boredpanda.com/blog/wp-content/uploads/2016/05/funniest-two-line-jokes-12-574c2fc2aef28__700.jpg"
    };
    let pic2 = {
      uri:
        "https://static.boredpanda.com/blog/wp-content/uploads/2016/05/funniest-two-line-jokes-39-574c2ff7975b7__700.jpg"
    };
    let pic3 = {
      uri:
        "https://static.boredpanda.com/blog/wp-content/uploads/2016/05/funniest-two-line-jokes-47-574c30094682c__700.jpg"
    };
    let pic4 = {
      uri:
        "https://static.boredpanda.com/blog/wp-content/uploads/2016/05/funniest-two-line-jokes-48-574c300b66c6b__700.jpg"
    };
    return (
      <ScrollView>
        <Image source={pic} style={{ width: 420, height: 400 }} />
        <Image source={pic2} style={{ width: 420, height: 400 }} />
        <Image source={pic3} style={{ width: 420, height: 400 }} />
        <Image source={pic4} style={{ width: 420, height: 400 }} />
        <Text style={{ fontSize: 50 }}>Have a nice day!</Text>
      </ScrollView>
    );
  }
}
