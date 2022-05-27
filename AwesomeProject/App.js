import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Button,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Tab Navigation
const Tab = createMaterialTopTabNavigator();

function SurveyScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView style={styles.scrollView}>
        <Card>
          <Card.Title style={{ color: "#73b4a8" }}>
            How much sleep did you get today?
          </Card.Title>
          <Card.Divider />
          <View>
            <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              }}
            />
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: "powderblue" },
        }}
      //   <TouchableOpacity
      //   onPress={() => navigation.navigate("Survey")}
      //   style={{
      //     width: "100%",
      //     alignItems: "center",
      //     justifyContent: "top",
      //     backgroundColor: "#eb7b76",
      //     paddingTop: "1%",
      //     paddingBottom: "1%",
      //   }}
      // >
      //   <Text style={{ color: "white" }}>Take today's survey</Text>
      // </TouchableOpacity>
      >
        <Tab.Screen
          name="My Data"
          component={MyDataScreen}
          options={{ tabBarLabel: "My Data" }}
        />
        <Tab.Screen
          name="My Classes"
          component={MyClassesScreen}
          options={{ tabBarLabel: "My Classes" }}
        />
      </Tab.Navigator>
  );
}

function MyDataScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "top" }}>
      <ScrollView style={styles.scrollView}>
        <Card>
          <Card.Title>Your pulse is ...</Card.Title>
          <View>
            <Image
              source={require("/Users/austinfujimori/Desktop/Student-Pulse/AwesomeProject/images/pulse.png")}
            />
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}
function MyClassesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "top" }}>
      
      <ScrollView style={styles.scrollView}>
        <Card>
          <Card.Title>Your pulse is ...</Card.Title>
          <View>
            <Text>
              Classes
            </Text>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Student Pulse",

            headerStyle: {
              backgroundColor: "#73b4a8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "light",
              fontSize: "30px",
            },
            headerRight: () => (
              <Button
                onPress={() => alert("Information")}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
        <Stack.Screen name="Survey" component={SurveyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
