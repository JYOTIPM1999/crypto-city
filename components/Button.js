import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants";

export const CircleButton = () => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
      }}
    ></TouchableOpacity>
  );
};

export const RectButton = () => {
  return (
    <View>
      <Text>CircleButton</Text>
    </View>
  );
};
