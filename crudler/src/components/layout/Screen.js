import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Screen = ({ children }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <View style={styles.screen}>
      {children}
      <StatusBar style="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Screen;
