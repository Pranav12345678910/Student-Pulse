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

//Stack Navigation
const Stack = createNativeStackNavigator();

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
        tabBarActiveTintColor: "white",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "#94d9c5" },
      }}
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
  //in prep for backend
  const myData = [
    {
      //arrays are filled with numerical data, one point for one day
      pulse: 78,
      Sleep: [],
      StressLevel: [],
      HomeworkTime: [],
      Freetime: [],
      Enjoyment: [],
    },
  ];

  const mapData = () => {
    return myData.map((element) => {
      return <Text>placeholder</Text>;
    });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "top" }}>
      <ScrollView style={styles.scrollView}>
        <Card
          containerStyle={{
            alignItems: "center",
            marginVertical: "2%",
            paddingHorizontal: "10%",
            paddingBottom: "10%",
          }}
        >
          <Text style={{ alignItems: "left" }}>Your Pulse is ... </Text>
          <View>
            <Image
              source={require("/Users/austinfujimori/Desktop/Student-Pulse/AwesomeProject/images/pulse.png")}
            />
          </View>
        </Card>
        {/* <View>
          {mapData()}
        </View> */}
      </ScrollView>
    </View>
  );
}

function MyClassesScreen({ navigation }) {
  //in prep for backend
  //limit description
  const myClasses = [
    {
      name: "AT Math",
      description: "cool math",
    },
    {
      name: "AP Physics 2",
      description: "very stressful",
    },
    {
      name: "AP Statistics",
      description: "statistics",
    },
    {
      name: "Tester",
      description: "TesterTesterTesterTesterTesterTesterTesterTesterTesterTesterTesterTesterTesterTesterTesterTester",
    },
  ];

  const mapClasses = () => {
    return myClasses.map((element) => {
      return (
        <View
          style={{
            alignItems: "center",
            marginHorizontal: "2%",
            width: "96%",
          }}
        >
          <Card
            containerStyle={{
              alignItems: "left",
              width: "100%",
              paddingBottom: "20%"
            }}
          >
            <View style={{ alignItems: "left" }}>
              <Text
                style={{ fontSize: "25", width: "100%", alignItems: "left" }}
              >
                {element.name}
              </Text>
              <Text
                style={{ fontSize: "15%", color: "grey", paddingTop: "3%" }}
              >
                {element.description}
              </Text>
            </View>
          </Card>
        </View>
      );
    });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "top" }}>
      <ScrollView style={{width: '100%'}}>{mapClasses()}</ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Survey" component={SurveyScreen} />
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
                onPress={() => navigation.navigate("Survey")}
                title="Survey"
                color="#fff"
              />
            ),
          }}
        />
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
