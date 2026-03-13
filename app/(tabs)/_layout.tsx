import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';


export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#302f2f",
        headerStyle: {
          backgroundColor: "#25292e"
        }, 
        headerShadowVisible: false, 
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: '#25292e'
        },
      }}
    >
      <Tabs.Screen name="index" options={{
        headerTitle: "StickerSmash",
        tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={30}/>
      }}/>
      <Tabs.Screen name="about" options={{
        headerTitle: "About",
        tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "information-circle-sharp": "information-circle-outline"} size={30}/>
      }}/>
      <Tabs.Screen name="+not-found" options={{
        headerShown: false,
      }}/>
    </Tabs>
  );
}