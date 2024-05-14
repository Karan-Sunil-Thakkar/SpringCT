// // //  Code for App Component for native-Stack Navigation 

// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'
// // import Login from './src/component/login'
// // import {NavigationContainer} from '@react-navigation/native'
// // import {createNativeStackNavigator} from '@react-navigation/native-stack'
// // import Home from './src/screen/Home'
// // import Details from './src/screen/Details'

// // export type RootStackParamList= {
// //   Home: undefined;
// //   Details: {productsId: String}
// // }
// // const Stack =createNativeStackNavigator<RootStackParamList >()
// // const App = () => {
// //   return (
// // <NavigationContainer>
// //   <Stack.Navigator initialRouteName='Home'>
// //     <Stack.Screen name='Home' component={Home} options={{title:'Trending Products'}} />
// //     <Stack.Screen name='Details' component={Details} options={{title:'product Details'}} />
// //   </Stack.Navigator>
// // </NavigationContainer>
// //   )
// // }

// // export default App

// // const styles = StyleSheet.create({
// //   container: {
// //     flex:1,
// //     justifyContent:"center",
// //     alignItems:'center',

// // }})


// // //  Code for Home Screen 
// // //  

// // import {StyleSheet, Text, View, Button} from 'react-native';
// // import React from 'react';
// // // Navigation
// // import {NativeStackScreenProps} from '@react-navigation/native-stack';
// // import {RootStackParamList} from '../../App';

// // type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

// // const Home = ({navigation}: HomeProps) => {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.smallText}>Home Screen </Text>
// //       {/* One way of doing.... */}
// //       {/* <Button
// //         title="Press for next Screen"
// //         onPress={() => navigation.navigate('Details', {productsId: '86'})}
// //       /> */}

// //       {/* Second way of doing  for this we have to do details also undefined in rootstackparmas */}
// //       {/* <Button title='preees for details' onPress={()=>navigation.navigate("Details")} /> */}

// //       {/*  Third way of doing this . ..... */}
// //       <Button title='go to details screen' onPress={()=>navigation.push('Details',{productsId:'77'})} />
// //     </View>
// //   );
// // };

// // export default Home;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   smallText: {
// //     color: '#00000',
// //   },
// // });



// //  Code for detials screen.......

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Details = () => {
//   return (
//     <View>
//       <Text>Details</Text>
//     </View>
//   )
// }

// export default Details

// const styles = StyleSheet.create({
//     container :{
//         flex:1,
//         justifyContent:"center",
//         alignItems:'center'
//     },
//     smallText:{
//         color:'#00000'
//     }
// })
