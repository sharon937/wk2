import React from "react-native";
import {  StyleSheet, Text,View, StatusBar, SafeAreaView } from "react-native";

const Header = () => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <View style={styles.headerStyle}>
          <Text style={styles.textStyle}>
            Troye Sivan
          </Text>
        </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    headerStyle: {
      backgroundColor: "#F8F8F8",
      justifyContent: "center",
      alignItems: "center",
      height: 60,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      // Android Only
      elevation: 2,
    },
    textStyle: {
      fontSize: 20,
    },
  });
  
  export default Header;