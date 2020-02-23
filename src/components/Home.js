import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native'
import * as Font from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'



export class Home extends Component {

    state = {
        fontLoaded: false,
      };
    async componentDidMount() {
        await Font.loadAsync({
          'Roboto': require('../../assets/fonts/Roboto.ttf'),
          'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf')
        });
    
        this.setState({ fontLoaded: true });
      }
    render() {
        return (
            <View style={styles.container}>
                

                <LinearGradient style={styles.bacParallax} colors={['#999999' ,'#5500FF']} start={[0.5, 2]}>
                    <LinearGradient style={styles.bacParallax} colors={['transparent' ,'#111111']} start={[0, 0]}>
                        <View style={styles.ParallaxTextContainer}>
                            <View>
                                <Text style={styles.ParallaxText}>Aqui estão algumas</Text>
                                <Text style={styles.ParallaxText}>playlists baseadas no seu</Text>
                                <Text style={styles.ParallaxText}>gosto musical.</Text>
                            
                            </View>
                        </View>
                        </LinearGradient>
                    </LinearGradient>
                    
                <ScrollView style={{flex:1}}>



                    <View style={styles.Fundo}>  
                            <Text style={styles.paraVC}>Feito para você</Text>
                                <View style={styles.mainDMContainer}>
                                    <Image style={styles.mainDM}  source={require('../images/DM.png')} />
                                    <Text style={styles.mainDMBandas}>Banda 1, Banda 2, Banda 3</Text>
                                    <Text style={styles.mainDMBandas}>e mais.</Text>
                                </View> 

                                <View style={styles.outrasDM}>
                                    <ScrollView style={{flex:1}} horizontal={true} >
                                        <View style={styles.continerDM}>
                                            <Image style={styles.soloDM}  source={require('../images/DM1.jpg')} />
                                            <Text style={styles.DMBandas}>Banda 1, Banda 2</Text>
                                            <Text style={styles.DMBandas}>Banda 3 ...</Text>
                                        </View>

                                        <View style={styles.continerDM}>
                                            <Image style={styles.soloDM}  source={require('../images/DM2.png')} />
                                            <Text style={styles.DMBandas}>Banda 1, Banda 2</Text>
                                            <Text style={styles.DMBandas}>Banda 3 ...</Text>
                                        </View>

                                        <View style={styles.continerDM}>
                                            <Image style={styles.soloDM}  source={require('../images/DM3.jpg')} />
                                            <Text style={styles.DMBandas}>Banda 1, Banda 2</Text>
                                            <Text style={styles.DMBandas}>Banda 3 ...</Text>
                                        </View>

                                        <View style={styles.continerDM}>
                                            <Image style={styles.soloDM}  source={require('../images/DM4.jpg')} />
                                            <Text style={styles.DMBandas}>Banda 1, Banda 2</Text>
                                            <Text style={styles.DMBandas}>Banda 3 ...</Text>
                                        </View>
                                    </ScrollView>

                                </View>
                    
                        <Text style={styles.podcastTitle}>Podcasts para conhecer</Text>

                        <View style={styles.podcastsScroll}>
                                    <ScrollView style={{flex:1}} horizontal={true} >
                                        <View style={styles.continerPodcast}>
                                            <Image style={styles.soloPodcast}  source={require('../images/Podcast1.jpg')} />
                                            <Text style={styles.namePodcast}>NerdCast</Text>
                                            <Text style={styles.ciadorPodcast}>Jovem Nerd</Text>
                                        </View>

                                        <View style={styles.continerPodcast}>
                                            <Image style={styles.soloPodcast}  source={require('../images/Podcast2.png')} />
                                            <Text style={styles.namePodcast}>TED Talks Daily</Text>
                                            <Text style={styles.ciadorPodcast}>TED</Text>
                                        </View>

                                        <View style={styles.continerPodcast}>
                                            <Image style={styles.soloPodcast}  source={require('../images/Podcast3.jpg')} />
                                            <Text style={styles.namePodcast}>Pânico</Text>
                                            <Text style={styles.ciadorPodcast}>Jovem Pan</Text>
                                        </View>

                                        <View style={styles.continerPodcast}>
                                            <Image style={styles.soloPodcast}  source={require('../images/Podcast4.jpg')} />
                                            <Text style={styles.namePodcast}>Flow</Text>
                                            <Text style={styles.ciadorPodcast}>Flow</Text>
                                        </View>

                                        <View style={styles.continerPodcast}>
                                            <Image style={styles.soloPodcast}  source={require('../images/Podcast5.jpg')} />
                                            <Text style={styles.namePodcast}>Não Ouvo Podcast</Text>
                                            <Text style={styles.ciadorPodcast}>Não Salvo</Text>
                                        </View>

                                        <View style={styles.continerPodcast}>
                                            <Image style={styles.soloPodcast}  source={require('../images/Podcast6.jpg')} />
                                            <Text style={styles.namePodcast}>Sinapse</Text>
                                            <Text style={styles.ciadorPodcast}>Ciência Todo Dia</Text>
                                        </View>

                                    </ScrollView>

                        </View>
                    
                        <Text style={styles.recomendadoText}>Recomendado para você</Text>
                        <View>

                                <View style={styles.containerCD}>
                                    <Image source={require('../images/CD1.jpg')} style={styles.imageCD} />
                                    <Text style={styles.imageText}>Supercombo</Text>
                                </View>

                                <View style={styles.containerCD}>
                                    <Image source={require('../images/CD2.jpg')} style={styles.imageCD} />
                                    <Text style={styles.imageText}>Vozes do Brasil</Text>
                                </View>

                                <View style={styles.containerCD}>
                                    <Image source={require('../images/CD3.jpg')} style={styles.imageCD} />
                                    <Text style={styles.imageText}>Folk Br</Text>
                                </View>

                                <View style={styles.containerCD}>
                                    <Image source={require('../images/CD4.jpg')} style={styles.imageCD} />
                                    <Text style={styles.imageText}>Xuxa, Demonio</Text>
                                </View>

                                <View style={styles.containerCD}>
                                    <Image source={require('../images/CD5.jpg')} style={styles.imageCD} />
                                    <Text style={styles.imageText}>One More Rep</Text>
                                </View>

                                <View style={styles.containerCD}>
                                    <Image source={require('../images/CD6.jpg')} style={styles.imageCD} />
                                    <Text style={styles.imageText}>Pátria Logo</Text>
                                </View>

                                <View style={styles.containerCD}>
                                    <Image source={require('../images/CD7.jpg')} style={styles.imageCD} />
                                    <Text style={styles.imageText}>This is Beatles</Text>
                                </View>

                                <View style={styles.containerCD}>
                                    <Image source={require('../images/CD8.jpg')} style={styles.imageCD} />
                                    <Text style={styles.imageText}>This is Arctic Monkeys</Text>
                                </View>

                                <View style={styles.containerCD}>
                                    <Image source={require('../images/CD9.jpg')} style={styles.imageCD} />
                                    <Text style={styles.imageText}>This is Imagine Dragons</Text>
                                </View>
                            </View>

                        <View>

                        </View>
                    </View>

                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height: Dimensions.get('screen').height*0.963,
        marginTop:Dimensions.get('screen').height*0.037,
        backgroundColor: '#111111',
    },
    bacParallax:{   
        height:Dimensions.get('screen').height*0.2,
        position:'absolute',
        width:Dimensions.get('screen').width,
        },
    ParallaxTextContainer:{
        flex:1,
        flexDirection:'column-reverse',
    },
    ParallaxText:{
        color:'#fff',
        fontFamily:'Roboto-Bold',
        fontSize:20,
        alignSelf:'center',
        position:'relative',
    },
    shadow:{
        height:Dimensions.get('screen').height*0.2,
        position:'relative',
    },
    Fundo:{  
        flex:1,
        backgroundColor: '#111111', 
        marginTop:Dimensions.get('screen').height*0.2,
        paddingBottom:120,
    },
    paraVC:{
      fontFamily:'Roboto-Bold',
      fontSize:20,
      alignSelf:'center', 
      color:'#FFF',
      marginTop:20,
    },
    mainDM:{
        height:240,
        width:240,
        marginTop:20,
        alignSelf:'center'
    },
    mainDMBandas:{
        color:'#c8c8c8',
        alignSelf:'center',
        marginTop:6,
        fontFamily:'Roboto'
    },
    outrasDM:{
        marginTop:16,
        
    },
    continerDM:{
    margin:0,
    marginLeft:16,
    },
    soloDM:{
        height:150,
        width:150,
    },
    DMBandas:{
        color:'#fff',
        alignSelf:'center',
        marginTop:6,
        fontFamily:'Roboto-Bold'
    },
    podcastTitle:{
        color:'#fff',
        fontFamily:'Roboto-Bold',
        fontSize:24,
        marginTop:60,
        marginLeft:16,
    },
    soloPodcast:{
        height:135,
        width:135,
        borderRadius:10,
        
    },
    continerPodcast:{
        marginLeft:16,
    },
    namePodcast:{
        color:'#ffff',
        marginTop:6,
        fontFamily:'Roboto-Bold'
    },
    ciadorPodcast:{
        color:'#bebebe',
        fontFamily:'Roboto'
    },
    podcastsScroll:{
        marginTop:16,
        marginBottom:16,
    },
    containerCD:{
    marginBottom:40,
    },
    imageCD:{
        height:230,
        width:230,
        alignSelf:'center',
    },
    imageText:{
        color:'#c8c8c8',
        alignSelf:'center',
        marginTop:4,
        fontFamily:'Roboto',
        fontSize:16,
    },
    recomendadoText:{
        color:'#FFF',
        alignSelf:'center',
        fontFamily:'Roboto-Bold',
        fontSize:18,
        marginBottom:16,
    }
});

export default Home
