import React, { Component } from "react";
import { View, Button, ScrollView, Text } from "react-native";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider
} from "recyclerlistview";

const N = 50000;

const ViewTypes = {
  FULL: 0,
  HALF_LEFT: 1,
  HALF_RIGHT: 2
};

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

export default class TestRecyclerList extends Component {
  constructor(props) {
    super(props);

    let dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });

    // const N = 1000;
    // const state = { buttons: {} };
    // for (let index = 0; index < N; index++) {
    //   state.buttons[index] = this.button(index);
    // }
    // this.state = state;

    this._layoutProvider = new LayoutProvider(
      index => ViewTypes.FULL,
      (type, dim) => {
        dim.width = 100;
        dim.height = 140;
      }
    );

    this.state = {
      dataProvider: dataProvider.cloneWithRows(this._generateArray(N))
    };
  }

  _generateArray(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = i;
    }
    return arr;
  }

  _rowRenderer(type, data) {
    const i = data;
    return (
      <CellContainer>
        <Button
          title={`${i}`}
          key={i}
          onPress={() => {
            this.setState(prevState => {
              prevState.buttons[i] = undefined;
              return prevState;
            });
          }}
        />
      </CellContainer>
    );
  }

  render() {
    // return <ScrollView>{Object.values(this.state.buttons)}</ScrollView>;
    return (
      <RecyclerListView
        layoutProvider={this._layoutProvider}
        dataProvider={this.state.dataProvider}
        rowRenderer={this._rowRenderer}
      />
    );
  }
}
