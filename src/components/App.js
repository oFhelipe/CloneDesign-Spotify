import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome, AntDesign, SimpleLineIcons  } from '@expo/vector-icons'
import { enableScreens } from 'react-native-screens';
enableScreens();
import Home from './Home';
import Buscar from './Buscar';
import Biblioteca from './Biblioteca';
import Premium from './Premium';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export class Application extends Component {
    render() {
        enableScreens();
        return (
         
           <View style={{flex:1}}>
                   
                   

                <Tab.Navigator 
                    initialRouteName="Home"
                    tabBarOptions={{
                        activeTintColor:'#fff',
                        inactiveTintColor:'#c8c8c8',
                        tabStyle:{
                            backgroundColor: '#222',
                        },
                    }}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size })=>{
                                if(route.name == "Inicio"){
                                    return focused == true ? <MaterialCommunityIcons name={'home'} color={color} size={size} />
                                     : <MaterialCommunityIcons name={'home-outline'} color={color} size={size}/>;
                                }
                                else if(route.name == "Buscar"){
                                    return focused == true ? <FontAwesome name={'search'} color={color} size={size} />
                                    : <AntDesign name={'search1'} color={color} size={size} />;
                                }
                                else if(route.name == "Biblioteca"){
                                    return focused == true ? <MaterialCommunityIcons name={'music-box'} color={color} size={size} />
                                    : <MaterialCommunityIcons name={'music-box-outline'} color={color} size={size} /> 
                                }

                                else if(route.name == "Premium"){
                                    return focused == true ? <FontAwesome name={'spotify'} color={color} size={size} />
                                    : <SimpleLineIcons name={'social-spotify'} color={color} size={size} /> 
                                }
                        }
                    })}>
                            
                            <Tab.Screen name="Inicio" component={Home}  ></Tab.Screen>
                            <Tab.Screen name="Buscar" component={Buscar} />
                            <Tab.Screen  name="Biblioteca" component={Biblioteca} />
                            <Tab.Screen name="Premium" component={Premium} />

                    </Tab.Navigator>
                    </View>

        )
    }
}

export default Application
