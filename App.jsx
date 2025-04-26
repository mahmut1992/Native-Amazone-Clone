import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import { SafeAreaView, StatusBar } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#9ee4d4" }}>
      <StatusBar barStyle={"default"} />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
