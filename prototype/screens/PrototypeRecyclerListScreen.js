import React from "react";
import TestRecyclerList from "../components/TestRecyclerList";

export default class ProtoypeRecyclerListScreen extends React.Component {
  static navigationOptions = {
    title: "app.json"
  };

  render() {
    return <TestRecyclerList />;
  }
}
