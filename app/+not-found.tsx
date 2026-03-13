import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{ title: "Page Not Found"}} />

    <View style={styles.container}>
      <Text style={styles.text}> Page Not Found! </Text>
      <Link href="/" style={styles.button}>
        Go Back to Home Screen!
      </Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 30
  }, 

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff"
  
  }, 

  container: {
    flex: 1, 
    backgroundColor: '#25292e', 
    alignItems: 'center',
    justifyContent: 'center',

  }


})