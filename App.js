//APP import
import React, { Component } from "react";
import { Provider } from "react-redux";
import MyNavigator from "./appContent/myRoute/myNavigator";
import store from "./appContent/myRedux/reduxStore";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MyNavigator />
      </Provider>
    );
  }
}
