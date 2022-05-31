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

function StudentHomeScreen({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="StudentHome"
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

function TeacherHomeScreen({ navigation }) {
  const myClasses = [
    // element 1
    {
      name: "AP Physics 2",
      description: "Learning Physics is Fun",
    }
  ]

  return (
    <Stack.Navigator initialRouteName="Classes">
      {/* stack screen consisting of buttons of classes which navigate to classes */}
      <Stack.Screen
        name="Classes"
        component={TeacherClassesScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* map out stack screens of each class */}
      {/* if we are mapping thru myClasses, we will iterate through "element" */}
      <Stack.Screen
        name="AP Physics 2" //element.name
        component={IndividualClassScreen}
        options={{
          title: "AP Physics 2", //element.name

          headerStyle: {
            backgroundColor: "#7FC7BA",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: "17px",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function IndividualClassScreen({ navigation }) {
  //use for all elements (classes)
  return(
    <Tab.Navigator
    initialRouteName="AP Physics 2"
    screenOptions={{
      tabBarActiveTintColor: "white",
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: "#94d9c5" },
    }}
  >
    <Tab.Screen
      name="Class Data"
      component={ClassDataScreen}
      options={{ tabBarLabel: "Class Data" }}
    />
    <Tab.Screen
      name="Students"
      component={StudentsScreen}
      options={{ tabBarLabel: "Students" }}
    />
  </Tab.Navigator>
  );
}

function ClassDataScreen({ navigation }) {
  //in prep for backend

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
          <Text style={{ alignItems: "left" }}>Class Pulse is ... </Text>
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

function StudentsScreen({ navigation }) {
  //in prep for backend
  //limit description
  const myStudents = [
    {
      name: "Austin",
      pulse: 78,
    },
    {
      name: "AFujimori",
      pulse: 56
    },
    {
      name: "AustinF",
      pulse: 45
    },
    {
      name: "AFuj",
      pulse: 34
    },
    {
      name: "TheFujer",
      pulse: 23
    },
  ];

  const mapStudents = () => {
    return myStudents.map((element) => {
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
              paddingBottom: "10%",
            }}
          >
            <View style={{ alignItems: "left"}}>
              <Text
                style={{ fontSize: "30", width: "100%", alignItems: "left"}}
              >
                {element.name}
              </Text>
              <Text
                style={{ fontSize: "15%", color: "grey", paddingTop: "3%" }}
              >
                PULSE: <Text style={{color:"teal"}}>{element.pulse}</Text>
              </Text>
            </View>
          </Card>
        </View>
      );
    });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "top" }}>
      <ScrollView style={{ width: "100%" }}>{mapStudents()}</ScrollView>
    </View>
  );
}

function TeacherClassesScreen({ navigation }) {
  //element that you iterate through
  const element = {
    name: "AP Physics 2",
    description: "Learning Physics is Fun",
  };

  return (
    <ScrollView>
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
            paddingBottom: "20%",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("AP Physics 2")}
            style={{
              height: "100%",
              width: "100%",
              alignItems: "left",
            }}
          >
            <Text style={{ fontSize: "25", width: "100%", alignItems: "left" }}>
              {element.name}
            </Text>
            <Text style={{ fontSize: "15%", color: "grey", paddingTop: "3%" }}>
              {element.description}
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    </ScrollView>
  );
}

function ChooserScreen({ navigation }) {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("TeacherHome")}
        title="Teacher"
        color="black"
      />
      <Button
        onPress={() => navigation.navigate("StudentHome")}
        title="Student"
        color="black"
      />
    </View>
  );
}

function MyDataScreen({ navigation }) {
  //in prep for backend
  const myData = {
    //arrays are filled with numerical data, one point for one day
    pulse: 78,
    Sleep: [],
    StressLevel: [],
    HomeworkTime: [],
    Freetime: [],
    Enjoyment: [],
  };

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
      name: "AP Calculus BC",
      description:
        "Math",
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
              paddingBottom: "20%",
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
      <ScrollView style={{ width: "100%" }}>{mapClasses()}</ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chooser">
        <Stack.Screen name="Survey" component={SurveyScreen} />
        <Stack.Screen
          name="StudentHome"
          component={StudentHomeScreen}
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
        <Stack.Screen
          name="TeacherHome"
          component={TeacherHomeScreen}
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
          }}
        />
        <Stack.Screen
          name="Chooser"
          component={ChooserScreen}
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
