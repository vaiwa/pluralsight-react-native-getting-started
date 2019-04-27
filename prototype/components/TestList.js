import React, { Component } from "react";
import { View, Button, ScrollView, Text, Image } from "react-native";

const N = 200;

class CellContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const index = this.props.index;
    const img = require(`../assets/images/icons/1.png`);
    return (
      <View
        {...this.props}
        style={{
          borderBottomColor: "slateblue",
          borderBottomWidth: 1
        }}
      >
        <Image style={{ width: 50, height: 50 }} source={img} />
        <Text>
          Cell {index} {img}
        </Text>
      </View>
    );
  }
}

export default class TestList extends Component {
  constructor(props) {
    super(props);

    const state = { rows: {} };
    for (let index = 0; index < N; index++) {
      state.rows[index] = this.row(index);
    }
    this.state = state;
  }

  row = i => <CellContainer key={i} index={i} />;

  render() {
    return <ScrollView>{Object.values(this.state.rows)}</ScrollView>;
  }
}
