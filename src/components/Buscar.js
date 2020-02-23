import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import * as Font from 'expo-font'
import { EvilIcons } from '@expo/vector-icons'

export class Buscar extends Component {

   async componentDidMount(){
        await Font.loadAsync({
            'Roboto': require('../../assets/fonts/Roboto.ttf'),
            'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf')
        });
    }
    render() {
        return (
            <View style={styles.container}>
                
                <LinearGradient style={styles.gradientBox} colors={['#222222', '#333333']} start={[0.2,1.4]} >
                    <Text style={styles.buscarTitle} >Buscar</Text>
                </LinearGradient>

                <ScrollView style={{flex:1}} >
                    
                    <View style={styles.Fundo} >
                    
                    <View style={styles.searchBox} >
                            <EvilIcons name={'search'} color={'#000'} size={32} />
                            <Text style={styles.searchText}>Artistas, músicas ou podcasts</Text>
                    </View>

                   
                        <Text style={styles.navegarSessoes}>Navegar pot todas as seções</Text>
                        <View style={styles.sessionsContainer}>
                        <View style={[styles.cadBusca, {backgroundColor: '#f59b23',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Podcasts</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#a0c3d2',}]}>
                            <View style={styles.sessionTextContainer}>
                                <Text style={styles.sessionText} >Lançamen-tos</Text>
                            </View>
                        
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#4b917d',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Paradas</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#ff6437',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Shows</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#a0c3d2',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Made for You</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#ffc864',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Brasil</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#2c45b8',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Funk</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#c3f0c8',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Pop</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#eb1e32',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Rock</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#f59b23',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Hip Hop</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#006450',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >{"Samba & Pagode"}</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#fec763',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Verão</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#509bf5',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Cidades</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#9cf1e2',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Eletronica/ Dance</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#509bf4',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Cristã</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#13b4b7',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Spotfy Awards</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#a0c3d2',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >MPB</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#f59b23',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Em alta</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#00634f',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Reggae</Text>
                            </View>
                        </View>

                        <View style={[styles.cadBusca, {backgroundColor: '#4000f4',}]}>
                            <View style={styles.sessionTextContainer}>
                            <Text style={styles.sessionText} >Indie</Text>
                            </View>
                        </View>

                        
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
    Fundo:{
        flex:1,
        backgroundColor: '#111111',
        minHeight: Dimensions.get('window').height,
        paddingBottom:120,
        marginTop:Dimensions.get('screen').height*0.25,
    },
    gradientBox:{
        height:Dimensions.get('screen').height*0.25,
        flexDirection:'column-reverse',
        position:'absolute',
        width:Dimensions.get('screen').width,

    },
    buscarTitle:{
        fontFamily:'Roboto-Bold',
        fontSize:48,
        alignSelf:'center',
        color:'#FFF',
        marginBottom:16,
    },
    searchBox:{
        backgroundColor: '#FFF',
        width:'90%',
        marginLeft:'5%',
        borderRadius:4,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:8,
    },
    searchText:{
        fontFamily:'Roboto-Bold',
        fontSize:16,
        paddingTop:13,
        paddingBottom:13,
        marginLeft:8,
    },
    navegarSessoes:{
        color:'#FFF',
        fontFamily:'Roboto-Bold',
        marginLeft:20,
        fontSize:16,
        marginTop:10,
    },
    cadBusca:{
        width:'44%',
        marginLeft:'4%',
        height:90,
        borderRadius:5,
        marginTop:16,
    },
    sessionsContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    sessionTextContainer:{
        marginLeft:8,
        marginTop:8,
        width:'55%',
    },
    sessionText:{
        color:'#FFF',
        fontFamily:'Roboto-Bold',
        
        
        fontSize:16.5,
    }
});
export default Buscar
