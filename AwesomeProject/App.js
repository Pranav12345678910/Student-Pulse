import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Button, TextInput, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { Card } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function SurveyScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView style={styles.scrollView}>
        <Card>
          <Card.Title style={{color: '#73b4a8'}}>
            How much sleep did you get today?
          </Card.Title>
            <Card.Divider/>
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Survey')}
        style={{
          width:'100%',
          alignItems: 'center', 
          justifyContent: 'top',
          backgroundColor: '#eb7b76',
          paddingTop:'1%',
          paddingBottom: '1%',
        }}
      >
        <Text style={{color:'white'}}>
          Take today's survey
        </Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        <Card>
          <Card.Title>Your pulse is ...</Card.Title>
            {/* <Card.Divider/> */}
              <View>
              <Image source = {require('/Users/austinfujimori/Desktop/Student-Pulse/AwesomeProject/images/pulse.png')} />
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
            title: 'Student Pulse',
            headerStyle: {
              backgroundColor: '#73b4a8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'light',
              fontSize: '30px',
            },
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});