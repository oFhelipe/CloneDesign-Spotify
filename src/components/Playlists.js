import React, { Component } from 'react'
import { Text, View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'


class Playlists extends Component {
    render() {
        return (
            <View style={{backgroundColor: '#111111', flex: 1}}>
                <ScrollView style={{flex:1}}>
                   
                    <View style={styles.searchContainer} > 

                        <View style={styles.searchBox} >
                            <EvilIcons style={styles.searchBoxIcon} name={'search'} color={'#bababa'} size={23} />
                            <Text style={styles.searchBoxLabel} >Procure entre playlists</Text>
                        </View>
                       
                        <View style={styles.filtrosButton}>
                            <Text style={styles.filtroLabel} >Filtros</Text>
                        </View>
                    </View>
               
                <View style={styles.playlistsContainer}>

                    <View style={styles.playlistBox}>
                        <View style={styles.plusBox}>
                            <View style={styles.plusDeitado}/>
                            <View style={styles.plusPe}/>                          
                        </View>
                        <Text style={styles.playlistNome}>Criar playlist</Text>
                    </View>

                    <View style={styles.playlistBox}>
                        <Image style={styles.capaPlaylist} source={require('../images/CapaPlaylist.jpg')} />
                        <View>
                           <Text style={styles.playlistNome}>Minha Playlist</Text> 
                           <Text style={styles.playlistUsurio}>de Usuário</Text> 
                        </View>               
                    </View>
                
                </View>

            </ScrollView>
            </View>
        
        )
    }
}

const styles = StyleSheet.create({
    playlistsContainer:{

    },
    searchContainer:{
        flexDirection:'row',
        marginLeft:'5%',
        marginTop:16
    },
    searchBox:{
        width:'73%',
        backgroundColor: '#333333',
        height:35,
        borderRadius:5,
        flexDirection:'row',
        alignItems: 'center',
    },
    searchBoxLabel:{
        fontFamily:'Roboto-Bold',
        color:'#bababa',
        fontSize:14,
        marginLeft:5
    },
    searchBoxIcon:{
        marginLeft:6
    },
    filtrosButton:{
        width:'18%',
        backgroundColor: '#333333',
        height:35,
        borderRadius:5,
        marginLeft:10,
        justifyContent:'center'
    },
    filtroLabel:{
        fontFamily:'Roboto-Bold',
        color:'#bababa',
        fontSize:14,
        alignSelf:'center',
    },
    playlistBox:{
        width:Dimensions.get('screen').width,
        marginLeft:20,
        marginTop:16,
        flexDirection:'row',
        alignItems:'center'
    },
    plusBox:{
        height:66,
        width:66,
        backgroundColor: '#333333',
        alignItems:'center',
        justifyContent:'center'
    },
    plusDeitado:{
        position:'absolute',
        backgroundColor: '#FFF',
        height:2,
        width:15,
    },
    plusPe:{
        position:'absolute',
        backgroundColor: '#FFF',
        height:15,
        width:2,
    },
    playlistNome:{
        color:'#FFF',
        fontFamily:'Roboto-Bold',
        fontSize:16,
        marginLeft:8
    },
    playlistUsurio:{
        color:'#bababa',
        fontFamily:'Roboto',
        fontSize:14,
        marginLeft:8
    },
    capaPlaylist:{
        height:66,
        width:66,
        alignItems:'center',
        justifyContent:'center'
    },
});

export default Playlists;