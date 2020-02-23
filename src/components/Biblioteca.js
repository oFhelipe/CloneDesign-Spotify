import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native'
import * as Font from 'expo-font'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import Musicas from './Musicas';


const Tab = createMaterialTopTabNavigator();




class Epsodios extends Component {

    render() {
        return (
            <ScrollView style={{backgroundColor: '#111111', flex: 1}}>
                <View style={styles.epsodioBox}>
                    <View style={styles.epsodioBoxTop}>
                        <Image style={styles.epsodeosPodcastImagem} source={require('../images/Podcast1.jpg')}/> 
                        <View style={styles.epsodioBoxTexto}>
                            <Text style={styles.epsodioTextoTitulo}>NerdCast NNN - Nome do Epsodio</Text>
                            <Text style={styles.epsodioTextoCast}>NerdCast</Text>
                        </View>  

                        <View style={styles.dotsEpsodios}>
                            <MaterialCommunityIcons name={'dots-vertical'} size={24} color='#bababa' />
                        </View> 
                    </View>
                    <View>
                        <Text style={styles.descText}>Neste podcast: Descrição sobre o podcast, sobre o que vai ser o podcast, tudo sobre o poscast</Text>
                    </View>
                    <View style={styles.epsodioBoxBottom}>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.epsodioPlay}>
                            <MaterialCommunityIcons name={'play'} color='#000' size={24}/>
                        </View>
                        
                              <Text style={styles.dataDiaEp}>Mês DD . XH XXMIN</Text> 
                              <View style={{flex:1, flexDirection:'row-reverse'}}>
                                    <MaterialCommunityIcons style={styles.epDownloadIcon} name={'progress-download'} color={'#bababa'} size={26}/>
                                    <MaterialCommunityIcons name={'check'} color={'#bababa'} size={26}/>
                              </View> 
                     </View>   
                    </View>
                </View>

                <View style={styles.epsodioBox}>
                    <View style={styles.epsodioBoxTop}>
                        <Image style={styles.epsodeosPodcastImagem} source={require('../images/Podcast1.jpg')}/> 
                        <View style={styles.epsodioBoxTexto}>
                            <Text style={styles.epsodioTextoTitulo}>NerdCast NNN - Nome do Epsodio</Text>
                            <Text style={styles.epsodioTextoCast}>NerdCast</Text>
                        </View>  

                        <View style={styles.dotsEpsodios}>
                            <MaterialCommunityIcons name={'dots-vertical'} size={24} color='#bababa' />
                        </View> 
                    </View>
                    <View>
                        <Text style={styles.descText}>Neste podcast: Descrição sobre o podcast, sobre o que vai ser o podcast, tudo sobre o poscast</Text>
                    </View>
                    <View style={styles.epsodioBoxBottom}>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.epsodioPlay}>
                            <MaterialCommunityIcons name={'play'} color='#000' size={24}/>
                        </View>
                        
                              <Text style={styles.dataDiaEp}>Mês DD . XH XXMIN</Text> 
                              <View style={{flex:1, flexDirection:'row-reverse'}}>
                                    <MaterialCommunityIcons style={styles.epDownloadIcon} name={'progress-download'} color={'#bababa'} size={26}/>
                                    <MaterialCommunityIcons name={'check'} color={'#bababa'} size={26}/>
                              </View> 
                     </View>   
                    </View>
                </View>
           
                <View style={styles.epsodioBox}>
                    <View style={styles.epsodioBoxTop}>
                        <Image style={styles.epsodeosPodcastImagem} source={require('../images/Podcast5.jpg')}/> 
                        <View style={styles.epsodioBoxTexto}>
                            <Text style={styles.epsodioTextoTitulo}>Não Ouvo #NNN - Nome do Epsodio</Text>
                            <Text style={styles.epsodioTextoCast}>Não Ouvo Podcasts</Text>
                        </View>  

                        <View style={styles.dotsEpsodios}>
                            <MaterialCommunityIcons name={'dots-vertical'} size={24} color='#bababa' />
                        </View> 
                    </View>
                    <View>
                        <Text style={styles.descText}>Neste podcast: Descrição sobre o podcast, sobre o que vai ser o podcast, tudo sobre o poscast</Text>
                    </View>
                    <View style={styles.epsodioBoxBottom}>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.epsodioPlay}>
                            <MaterialCommunityIcons name={'play'} color='#000' size={24}/>
                        </View>
                        
                              <Text style={styles.dataDiaEp}>Mês DD . XH XXMIN</Text> 
                              <View style={{flex:1, flexDirection:'row-reverse'}}>
                                    <MaterialCommunityIcons style={styles.epDownloadIcon} name={'progress-download'} color={'#bababa'} size={26}/>
                                    <MaterialCommunityIcons name={'check'} color={'#bababa'} size={26}/>
                              </View> 
                     </View>   
                    </View>
                </View>
            
                <View style={styles.epsodioBox}>
                    <View style={styles.epsodioBoxTop}>
                        <Image style={styles.epsodeosPodcastImagem} source={require('../images/Podcast1.jpg')}/> 
                        <View style={styles.epsodioBoxTexto}>
                            <Text style={styles.epsodioTextoTitulo}>NerdCast NNN - Nome do Epsodio</Text>
                            <Text style={styles.epsodioTextoCast}>NerdCast</Text>
                        </View>  

                        <View style={styles.dotsEpsodios}>
                            <MaterialCommunityIcons name={'dots-vertical'} size={24} color='#bababa' />
                        </View> 
                    </View>
                    <View>
                        <Text style={styles.descText}>Neste podcast: Descrição sobre o podcast, sobre o que vai ser o podcast, tudo sobre o poscast</Text>
                    </View>
                    <View style={styles.epsodioBoxBottom}>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.epsodioPlay}>
                            <MaterialCommunityIcons name={'play'} color='#000' size={24}/>
                        </View>
                        
                              <Text style={styles.dataDiaEp}>Mês DD . XH XXMIN</Text> 
                              <View style={{flex:1, flexDirection:'row-reverse'}}>
                                    <MaterialCommunityIcons style={styles.epDownloadIcon} name={'progress-download'} color={'#bababa'} size={26}/>
                                    <MaterialCommunityIcons name={'check'} color={'#bababa'} size={26}/>
                              </View> 
                     </View>   
                    </View>
                </View>
            
                <View style={styles.epsodioBox}>
                    <View style={styles.epsodioBoxTop}>
                        <Image style={styles.epsodeosPodcastImagem} source={require('../images/Podcast5.jpg')}/> 
                        <View style={styles.epsodioBoxTexto}>
                            <Text style={styles.epsodioTextoTitulo}>Não Ouvo #NNN - Nome do Epsodio</Text>
                            <Text style={styles.epsodioTextoCast}>Não Ouvo Podcasts</Text>
                        </View>  

                        <View style={styles.dotsEpsodios}>
                            <MaterialCommunityIcons name={'dots-vertical'} size={24} color='#bababa' />
                        </View> 
                    </View>
                    <View>
                        <Text style={styles.descText}>Neste podcast: Descrição sobre o podcast, sobre o que vai ser o podcast, tudo sobre o poscast</Text>
                    </View>
                    <View style={styles.epsodioBoxBottom}>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.epsodioPlay}>
                            <MaterialCommunityIcons name={'play'} color='#000' size={24}/>
                        </View>
                        
                              <Text style={styles.dataDiaEp}>Mês DD . XH XXMIN</Text> 
                              <View style={{flex:1, flexDirection:'row-reverse'}}>
                                    <MaterialCommunityIcons style={styles.epDownloadIcon} name={'progress-download'} color={'#bababa'} size={26}/>
                                    <MaterialCommunityIcons name={'check'} color={'#bababa'} size={26}/>
                              </View> 
                     </View>   
                    </View>
                </View>
            
            </ScrollView>
        )
    }
}

class Downloads extends Component {
    render() {
        return (
            <View style={styles.DownloadsContainer}>
                <View>
                    <Text style={styles.titleDown}>Nenhum download por enquanto</Text>
                    <Text style={styles.descDown}>Toque em <MaterialCommunityIcons style={styles.epDownloadIcon} name={'progress-download'} color={'#bababa'} size={26}/> em um episódio para ouvi-lo sem conexão.</Text>
                </View>
                <View style={styles.explorarButton}>
                        <Text style={styles.explorarPodcasts}>EXPLORAR PODCAS...</Text>
                </View>
            </View>
        )
    }
}

class Programas extends Component {
    render() {
        return (
            <View style={{backgroundColor: '#111111', flex:1, flexDirection:'column'}}>


                    <View style={styles.programasPodBox}>
                        <Image style={styles.imagemPodProgramas} source={require('../images/Podcast1.jpg')} />
                        <View style={styles.textPodProgramas}>
                            <Text style={styles.nomePrograma}>NerdCast</Text>
                            <Text  style={styles.atualizadoDono}>Atualizado -X dia(s) atrás . Jovem Nerd</Text>
                        </View>
                    </View>

                    <View style={styles.programasPodBox}>
                        <Image style={styles.imagemPodProgramas} source={require('../images/Podcast5.jpg')} />
                        <View style={styles.textPodProgramas}>
                            <Text style={styles.nomePrograma}>Nâo Ouvo Podcasts</Text>
                            <Text  style={styles.atualizadoDono}>Atualizado -hoje . Não Salvo</Text>
                        </View>
                    </View>

                

                
            </View>
        )
    }
}


class Podcasts extends Component {
    async componentDidMount(){
        await Font.loadAsync({
            'Roboto': require('../../assets/fonts/Roboto.ttf'),
            'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf')
        });
    }
    render() {
        return (
            <Tab.Navigator style={{backgroundColor: '#111111',}} tabBarOptions={{
                style:{
                    backgroundColor: '#111111',
                    width:Dimensions.get('screen').width*0.95,
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
                <Tab.Screen name="Epsodios" component={Epsodios}/>
                <Tab.Screen name="Downloads" component={Downloads}/>
                <Tab.Screen name="Programas" component={Programas}/>
             </Tab.Navigator>
        )
    }
}

export class Biblioteca extends Component {


    render() {
        return (
            <Tab.Navigator 
                style={styles.Topo}
                tabBarOptions={{
                    pressColor:'transparent',
                    indicatorStyle:{
                        backgroundColor: 'transparent',
                    },
                    inactiveTintColor:'#bababa',
                    activeTintColor:'#FFF',
                    labelStyle:{
                        fontFamily:'Roboto-Bold',
                        fontSize:32,
                        textTransform:'capitalize'
                    },
                    style:{
                        backgroundColor:'#111111',
                        width:Dimensions.get('screen').width*0.9,
                        height:60,
                        elevation:0,
                        shadowOpacity: 0,
                        shadowOffset: {
                          height: 0,
                        },
                        shadowRadius: 0, 
                    }
                }}>
                <Tab.Screen 
                    name="Musicas" 
                    component={Musicas} 
                    options={{
                        tabBarLabel:'Músicas',
                    }} />

                <Tab.Screen 
                    name="Podcasts" 
                    component={Podcasts} />

            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height: Dimensions.get('screen').height,

        backgroundColor: '#111111',
    },
    Topo:{
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height*0.18,
        marginTop:Dimensions.get('screen').height*0.037,
        backgroundColor: '#111111',
    },
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
    artistasContainer:{
        flexDirection:'column'
    },
    artistaBox:{
        width:Dimensions.get('screen').width,
        flexDirection:'row',
        marginLeft:20,
        marginTop:16,
        },
        artistaImagem:{
            height:64,
            width:64,
            borderRadius:50,
        },
        artistaNome:{
            color:'#FFF',
            fontFamily:'Roboto-Bold',
            fontSize:16,
            marginLeft:8,
            alignSelf:'center'
        },
        albunsText:{
            fontFamily:'Roboto-Bold',
            fontSize:25,
            color:'#FFF',
            textAlign:'center'
        },
        albunsContainer:{
            backgroundColor: '#111111', 
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        albunsBox:{
            width:'78%',
        },
        epsodioBox:{
            backgroundColor: '#222222',
            width:'90%',
            height:180,
            marginLeft:'5%',
            marginTop:24,
            borderRadius:5,
        },
        epsodeosPodcastImagem:{
            height:64,
            width:64,
            margin:10,
            borderRadius:5,
        },
        epsodioBoxTop:{
            flexDirection:'row'
        },
        epsodioBoxTexto:{
            width:'60%',
            marginTop:10,
        },
        epsodioTextoTitulo:{
            fontFamily:'Roboto-Bold',
            color:'#FFF',
            fontSize:16,
        },
        epsodioTextoCast:{
            fontFamily:'Roboto',
            color:'#bababa',
            fontSize:13,
        },
        dotsEpsodios:{
            flexDirection:'column',
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            height:64,
        },
        descText:{
            fontFamily:'Roboto',
            fontSize:12,
            color:'#bababa',
            width:'90%',
            marginLeft: '5%',
        },
        epsodioBoxBottom:{
            flex:1,
            justifyContent:'center',
            marginLeft:10,
        },
        epsodioPlay:{
            backgroundColor: '#FFF',
            height:32,
            width:32,
            borderRadius:50,
            alignItems:'center',
            justifyContent:'center',
        },
        dataDiaEp:{
            fontFamily:'Roboto',
            color:'#bababa',
            fontSize:12,
            alignSelf:'center',
            marginLeft:8,
                },
        epDownloadIcon:{
            marginLeft:16,
            marginRight:16,
        },
        DownloadsContainer:{
            backgroundColor: '#111111',
             flex:1,
             alignItems:'center',
             justifyContent:'center',
            },
            titleDown:{
                fontFamily:'Roboto-Bold',
                fontSize:25,
                color:'#FFF',
                alignSelf:'center',
                textAlign:'center',
            },
            descDown:{
                fontFamily:'Roboto-Bold',
                fontSize:14,
                color:'#bababa',
                alignSelf:'center',
                textAlign:'center',
            },
            explorarButton:{
                width:'80%',
                height:55,
                backgroundColor: '#FFF',
                borderRadius:50,
                alignItems:'center',
                justifyContent:'center',
                marginTop:28,
            },
            explorarPodcasts:{
                fontFamily:'Roboto-Bold',
                fontSize:15,
                color:'#000',
            },
            programasPodBox:{
                flexDirection:'row',
                marginTop:16,
                marginLeft:16
            },
            imagemPodProgramas:{
                height:64,
                width:64,
                borderRadius:5,
            },
            textPodProgramas:{
                marginLeft:8,
                flex:1,
                marginTop:10,
            },
            nomePrograma:{
                fontFamily:'Roboto-Bold',
                color:'#FFF',               
                fontSize:15,
            },
            atualizadoDono:{
                fontFamily:'Roboto',
                color:'#bababa',
                fontSize:13,
            }


});
export default Biblioteca
