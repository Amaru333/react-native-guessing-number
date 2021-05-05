import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The game is over</Text>
      <Image
        source={{
          uri:
            "https://media1.tenor.com/images/bbd5c3bfce916b9f4e648a7c58c7bafc/tenor.gif",
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </Text>
      </View>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 10,
  },
  highlight: {
    color: Colors.accent,
  },
  textContainer: {
    marginHorizontal: 40,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 14,
  },
});

export default GameOverScreen;
