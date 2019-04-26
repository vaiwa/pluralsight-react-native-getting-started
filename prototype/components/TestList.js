import React, { Component } from "react";
import { View, Button, ScrollView, Text } from "react-native";

const N = 200;

let containerCount = 0;

class CellContainer extends React.Component {
  constructor(args) {
    super(args);
    this._containerId = containerCount++;
  }
  render() {
    return (
      <View {...this.props}>
        {this.props.children}
        <Text>Cell Id: {this._containerId}</Text>
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

  row = i => (
    <CellContainer key={i}>
      <Button
        title={`${i}`}
        onPress={() => {
          this.setState(prevState => {
            prevState.rows[i] = undefined;
            return prevState;
          });
        }}
      />
    </CellContainer>
  );

  render() {
    return <ScrollView>{Object.values(this.state.rows)}</ScrollView>;
  }
}
