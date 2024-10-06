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
    padding: 15,
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Screen;
