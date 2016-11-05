/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text
} from "react-native";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 50
  },
  text: {
    fontSize: 18,
    fontFamily: "Menlo",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30
  }
});

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

class Demo extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>{"Victory Tutorial"}</Text>
        <VictoryChart
          domainPadding={40}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`$${x / 1000}k`)}
          />
          <VictoryBar
            style={{
              data: {fill: "blue"}
            }}
            data={data}
            x={"quarter"}
            y={"earnings"}
          />
        </VictoryChart>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent("Demo", () => Demo);
