import React, { Component } from 'react'
import { Text, View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'


class Artistas extends Component {
    render() {
        return (
            <View style={{backgroundColor: '#111111', flex: 1}}>
            <ScrollView style={{flex:1}}>
               
                <View style={styles.searchContainer} > 

                    <View style={styles.searchBox} >
                        <EvilIcons style={styles.searchBoxIcon} name={'search'} color={'#bababa'} size={23} />
                        <Text style={styles.searchBoxLabel} >Procure entre artistas</Text>
                    </View>
                   
                    <View style={styles.filtrosButton}>
                        <Text style={styles.filtroLabel} >Filtros</Text>
                    </View>
                </View>

                <View style={styles.artistasContainer}>
                    <View style={styles.artistaBox}>
                        <Image style={styles.artistaImagem} source={require('../images/A1.jpg')} />
                        <Text style={styles.artistaNome}>Arctic Monkeys</Text>
                    </View>

                    <View style={styles.artistaBox}>
                        <Image style={styles.artistaImagem} source={require('../images/A2.jpg')} />
                        <Text style={styles.artistaNome}>Imagine Dragons</Text>
                    </View>

                    <View style={styles.artistaBox}>
                        <Image style={styles.artistaImagem} source={require('../images/A3.jpg')} />
                        <Text style={styles.artistaNome}>The Beatles</Text>
                    </View>

                    <View style={styles.artistaBox}>
                        <Image style={styles.artistaImagem} source={require('../images/A4.jpg')} />
                        <Text style={styles.artistaNome}>Supercombo</Text>
                    </View>

                    <View style={styles.artistaBox}>
                        <Image style={styles.artistaImagem} source={require('../images/A5.jpg')} />
                        <Text style={styles.artistaNome}>Tewnty one Pilots</Text>
                    </View>



                    <View style={styles.artistaBox}>
                        <Image style={styles.artistaImagem} source={require('../images/A6.jpg')} />
                        <Text style={styles.artistaNome}>Ed sheeran</Text>
                    </View>

                    <View style={styles.artistaBox}>
                        <Image style={styles.artistaImagem} source={require('../images/A7.jpg')} />
                        <Text style={styles.artistaNome}>Linkin Park</Text>
                    </View>
                </View>
            
        </ScrollView>
        </View>
    
        )
    }
}

const styles = StyleSheet.create({
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
});

export default Artistas;