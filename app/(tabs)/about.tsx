import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container} >
      <Text style={styles.text}> About Screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  }, 

  container: {
    flex: 1, 
    backgroundColor: '#25292e', 
    alignItems: 'center',
    justifyContent: 'center',

  }


})