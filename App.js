import React from "react-native";
import{SafeAreaView, StatusBar, View, Image, StyleSheet ,Text} from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <AlbumList />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



export default App;