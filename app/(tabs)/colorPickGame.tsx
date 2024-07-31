import { useState, useEffect } from "react";
import {
  Button,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Platform,
  Pressable,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import { Image } from "expo-image";

const getRandomColor = (difference: number) => {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${red},${green},${blue})`;
  const differentColor = `rgb(${red},${
    green > 100 ? green - difference : green + difference
  },${blue})`;
  return {
    color: randomColor,
    differentColor: differentColor,
  };
};

const getRandomNum = () => {
  return Math.floor(Math.random() * 9) + 1;
};
export default function App() {
  const [level, setLevel] = useState(50);
  const [color, setColor] = useState(getRandomColor(level));
  const [selectedSquare, setSelectedSquare] = useState(getRandomNum());

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gameContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return (
            <Pressable
              key={item}
              style={{
                ...styles.square,
                backgroundColor:
                  item == selectedSquare ? color.color : color.differentColor,
              }}
            >
              <Text>{item}</Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gameContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 310,
    height: 300,
    gap: 2,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
