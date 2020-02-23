import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

export class Inicio extends Component {
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
            <View style={styles.container} >
                <LinearGradient style={styles.fundo} colors={['#444444' ,'#222222', '#111111' , '#000000']} >
                    
                    <View style={styles.iconContainer}>
                        <Image source={require('../images/icon.png')} style={styles.icon} /> 
                    </View>

                    <View style={styles.formContainer}>

                    <View style={styles.titleContainer} >
                        { this.state.fontLoaded ? (
                        <Text style={styles.title}>Milhões de músicas à sua escolha.</Text>):null} 
                        { this.state.fontLoaded ? (
                        <Text style={styles.title}>Grátis no Spotify</Text>):null} 
                    </View>
                    
                    <TouchableOpacity style={styles.cadButton}>
                    { this.state.fontLoaded ? (
                        <Text style={styles.cadButtonFont} >INSCREVA-SE GRÁTIS</Text>):null} 
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cadButtonFace}>
                    { this.state.fontLoaded ? (
                        <Text style={styles.cadButtonFontFace} >CONTINUAR COM O FACEBOOK</Text>):null} 
                    </TouchableOpacity>

                    <TouchableOpacity 
                            style={styles.entrarButton}
                            onPress={()=> this.props.navigation.navigate('Application')}>
                    { this.state.fontLoaded ? (
                        <Text style={styles.entrarButtonFont} >ENTRAR</Text>):null} 
                    </TouchableOpacity>
                    </View>

                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height: Dimensions.get('screen').height*0.963,
        marginTop:Dimensions.get('screen').height*0.037,
    },
    fundo:{
        flex:1,
    },

    iconContainer:{
        flex:2,
        flexDirection:'column',
        justifyContent:'center'
    },
    formContainer:{
        flex:2,
        flexDirection:'column',
    },
    icon:{
        width:64,
        height:64,
        alignSelf:"center",
    },
    titleContainer:{
        width:Dimensions.get('screen').width,
        alignItems:'center',
        flexDirection:'column',
    },
    title:{
        fontFamily:'Roboto-Bold',
        color:'#fff',
        fontSize:16,
    },
    cadButton:{
        backgroundColor: '#1DB954',
        width:Dimensions.get('window').width*0.85,
        alignSelf:'center',
        height:50,
        borderRadius:25,
        justifyContent:'center',
        marginTop:20,
    },
    cadButtonFont:{
        color:'#fff',
        fontSize:13,
        fontFamily:'Roboto-Bold',
        alignSelf:'center',
    },
    cadButtonFace:{
        backgroundColor: 'transparent',
        borderWidth:3,
        borderColor:'#fff',
        width:Dimensions.get('window').width*0.85,
        alignSelf:'center',
        height:50,
        borderRadius:25,
        justifyContent:'center',
        marginTop:20,
    },
    cadButtonFontFace:{
        color:'#fff',
        fontSize:14,
        fontFamily:'Roboto-Bold',
        alignSelf:'center',
    },
    entrarButton:{
        backgroundColor: 'transparent',
        width:Dimensions.get('window').width*0.85,
        alignSelf:'center',
        height:50,
        borderRadius:25,
        justifyContent:'center'
    },
    entrarButtonFont:{
        color:'#fff',
        fontSize:14,
        fontFamily:'Roboto-Bold',
        alignSelf:'center',
    }
});

export default Inicio
