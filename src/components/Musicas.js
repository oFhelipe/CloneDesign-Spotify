import React, { Component } from 'react'
import { Dimensions  } from 'react-native'
import * as Font from 'expo-font'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { enableScreens } from 'react-native-screens';
enableScreens();
import Playlists from './Playlists';
import Artistas from './Artistas';
import Albuns from './Albuns';

const Tab = createMaterialTopTabNavigator();

class Musicas extends Component {
    async componentDidMount(){
        await Font.loadAsync({
            'Roboto': require('../../assets/fonts/Roboto.ttf'),
            'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf')
        });
    }
    render() {
        return (
            <Tab.Navigator style={{backgroundColor: '#111111',}} tabBarOptions={{
                pressColor:'transparent',
                style:{
                    backgroundColor: '#111111',
                    width:Dimensions.get('screen').width*0.82,
                    height:40,
                    elevation:0,
                    shadowOpacity: 0,
                    shadowOffset: {
                      height: 0,
                    },
                    shadowRadius: 0, 
                },
                labelStyle:{
                    fontFamily:'Roboto-Bold',
                    textTransform:'capitalize',
                    fontSize:14,
                },
                activeTintColor:'#FFF',
                inactiveTintColor:'#bababa',
                indicatorStyle:{
                    backgroundColor: '#1DB954',
                    width:'16%',
                    marginLeft:'6%'
                }
            }}>
                <Tab.Screen name="Playlists" component={Playlists}/>
                <Tab.Screen name="Artistas" component={Artistas}/>
                <Tab.Screen name="Albuns" component={Albuns} options={{tabBarLabel:'Álbuns'}}/>
             </Tab.Navigator>
        )
    }
}

export default Musicas;