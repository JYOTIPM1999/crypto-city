import { createStackNavigator } from "@react-navigation/stack";

import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Details from "./screens/Details";

const Stack = createStackNavigator();

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: "transparent",
//   },
// };

const App = () => {
  return (
    // <NavigationContainer theme={theme}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
