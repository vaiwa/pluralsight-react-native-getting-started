import React from "react";
import TestList from "../components/TestList";

export default class ProtoypeRecyclerListScreen extends React.Component {
  static navigationOptions = {
    title: "app.json"
  };

  render() {
    return <TestList />;
  }
}
