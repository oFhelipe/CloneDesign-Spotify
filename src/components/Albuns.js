import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'


class Albuns extends Component {
    render() {
        return (
            <View style={styles.albunsContainer}>
                <View style={styles.albunsBox}>
                    <Text style={styles.albunsText}> Seus álbuns aparecerão aqui </Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
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
});

export default Albuns;