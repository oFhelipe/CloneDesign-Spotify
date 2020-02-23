import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import * as Font from 'expo-font';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient'

const entriesDefault = [
    {
        gratis:'Anúncios entre as músicas',
        premium:'Música sem propaganda'
    },
    {
        gratis:'Ouça em ordem aleatória',
        premium:'Escute qualquer música'
    },

    {
        gratis:'Pule até 6 faixas por hora',
        premium:'Pule quantas faixas quiser'
    },
    {
        gratis:'Música só por streaming',
        premium:'Reprodução em modo offline'
    },
    {
        gratis:'Qualidade de áudio básica',
        premium:'Som de altíssima qualidade'
    },
    
]

export default class Premium extends Component {
    state = {
        entries:[...entriesDefault],
        activeSlide:0,
    }


   async componentDidMount(){
       await Font.loadAsync({
        'Roboto': require('../../assets/fonts/Roboto.ttf'),
        'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
       });
   };

    //item que vai ser rendenizado
    _renderItem = ({item, index}) => {
        return (
            <View>
            <View style={styles.slide}>

                <View style={styles.freeBox}>
                <View style={styles.styleCarrouselType}>
                    <Text style={styles.CarrouselTypeText}>GRÁTIS</Text>
                </View>
                    
                    <Text style={styles.title}>{ item.gratis }</Text>
                </View>

                <View style={styles.premiumBox}>
                 <View style={styles.styleCarrouselType}>
                       <Text style={styles.CarrouselTypeText}>PREMIUM</Text> 
                    </View>
                    
                     <Text style={styles.title}>{ item.premium }</Text>
                </View>

             </View>   
        </View>
        );
    }

    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              containerStyle={{ 
                  backgroundColor: 'transparent',
                  paddingVertical:0,
                  marginTop:10,
                }}
              dotStyle={{
                  width: 8,
                  height: 8,
                  borderRadius: 5,
                  marginHorizontal: -8,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotStyle={{
                width: 13,
                height: 13,
                borderRadius: 50,
                marginHorizontal: -16,
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }

    render () {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <LinearGradient colors={['#0fb073','#111111']} style={styles.premiumTopcontainer}>
                        <Text style={styles.expemimenteText}>Experimente o Premium de graça por 1 mês</Text>
                        <View style={styles.carrouselContainer} >
                            <Carousel
                                data={this.state.entries}//dados que vai em cada item do carossel
                                renderItem={this._renderItem}//resgate dos itens a serem rendenizados
                                sliderWidth={Dimensions.get('window').width}
                                itemWidth={280}
                                onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                                layoutCardOffset={18}/>
                                { this.pagination }
                        </View>
                        <View style={styles.sejaPremiumButton}>
                            <Text style={styles.sejaPremiumText}>SEJA PREMIUM</Text>
                        </View>
                        <Text style={styles.compaText}>Apenas R$16,90/mês após o peropdp da oferta. Cancele quando quiser.</Text>
                        <View style={{flexDirection:'row', alignSelf:'center'}}><Text style={styles.compaText}>Sujeito a </Text><Text style={[styles.compaText, {fontFamily:'Roboto-Bold', color:'#FFF'}]}>termos e doncições.</Text></View>

                    </LinearGradient>
                    <View style={styles.premiumBottomcontainer}>
                        <View style={styles.planoAtualBox}>
                            <View style={{flexDirection:'row', justifyContent:'space-around'}}><Text style={[styles.title,{ width:'auto' }]}>Spotify grátis</Text><Text style={styles.CarrouselTypeText}>PLANO ATUAL</Text></View>
                        </View>

                        <View style={styles.planoPrePago}>
                                <View>
                                    <Text style={styles.precoPlano}>A partir de R$16,90</Text>
                                    <Text style={styles.tituloPlano}>Premium pré-pago</Text>
                                    <Text style={styles.mes}>/MÊS</Text>
                                </View>
                                <Text style={styles.planoDesc}>
                                    Aproveite todos os benefícios de Premium pagando com Boleto ou cartão pré-pago.
                                </Text>
                            <View style={styles.sejaPremiumButton}>
                                <Text style={styles.sejaPremiumText}>SEJA PREMIUM</Text>
                            </View>
                            <Text style={styles.planoTextMiudo}>
                                Os preço variam de acordo com a forma de pagamento e a duração do plano a termos e condições.
                            </Text>

                        </View>


                        <View style={[styles.planoPrePago, {backgroundColor: '#0fb073',}]}>
                            <View style={{flexDirection:'row-reverse', marginTop:16, width:'100%', justifyContent:'space-between'}}>
                                
                                <View>
                                    <Text style={[styles.precoPlano, { fontSize:24, marginTop:0 }]}>Grátis</Text>
                                    <Text style={styles.mes}>POR 1 MÊS</Text>                              
                                </View>
                                
                                <View style={{marginLeft:16}}><Text style={styles.tituloPlano}>Premium </Text><Text style={styles.tituloPlano}>Individual</Text></View>
                                
                            </View>

                                <Text style={styles.planoDesc}>
                                    Escute músicas sem anúncios. Baixe conteúdo para ouvir offline. Pule quantas faixas quiser. Curta o som sob demanda. Cancele quando quiser
                                </Text>
                            <View style={styles.sejaPremiumButton}>
                                <Text style={[styles.sejaPremiumText, {fontSize:11}]}>EXPERIMENTE 1 MÊS GRÁTIS</Text>
                            </View>
                            <Text style={styles.planoTextMiudo}>
                                Apenas R$16,90/mês após o período da oderta.
                            </Text>
                            <View style={{flexDirection:'row', alignSelf:'center'}}>
                              <Text style={[styles.planoTextMiudo,{width:'auto'}]}>
                                Cancele quando quiser. Sujeito a  
                            </Text>  
                            <Text> </Text>
                            <Text style={[styles.planoTextMiudo, {color: '#FFF', width:'auto'}]}>
                                termos e condições.
                            </Text>  
                            </View>
                            

                        </View>


                        <View style={[styles.planoPrePago, {backgroundColor: '#e08d3b',}]}>
                            <View style={{flexDirection:'row-reverse', marginTop:16, width:'100%', justifyContent:'space-between'}}>
                                
                                <View>
                                    <Text style={[styles.precoPlano, { fontSize:24, marginTop:0 }]}>Grátis</Text>
                                    <Text style={styles.mes}>POR 1 MÊS</Text>                              
                                </View>
                                
                                <View style={{marginLeft:16}}><Text style={styles.tituloPlano}>Premium para </Text><Text style={styles.tituloPlano}>Universitários</Text></View>
                                
                            </View>

                                <Text style={styles.planoDesc}>
                                    Escute músicas sem anúncios. Baixe conteúdo para ouvir offline. Pule quantas faixas quiser. Curta o som sob demanda. Cancele quando quiser
                                </Text>
                            <View style={styles.sejaPremiumButton}>
                                <Text style={[styles.sejaPremiumText, {fontSize:11}]}>EXPERIMENTE 1 MÊS GRÁTIS</Text>
                            </View>
                            <Text style={styles.planoTextMiudo}>
                                Apenas R$8,50/mês após o período da oderta.
                            </Text>
                            <View style={{flexDirection:'row', alignSelf:'center'}}>
                              <Text style={[styles.planoTextMiudo,{width:'auto'}]}>
                                Cancele quando quiser. Sujeito a  
                            </Text>  
                            <Text> </Text>
                            <Text style={[styles.planoTextMiudo, {color: '#FFF', width:'auto'}]}>
                                termos e condições.
                            </Text>  
                            </View>
                            

                        </View>

                        

                        <View style={[styles.planoPrePago, {backgroundColor: '#4e6fa2',}]}>
                            <View style={{flexDirection:'row-reverse', marginTop:16, width:'100%', justifyContent:'space-between'}}>
                                
                                <View>
                                    <Text style={[styles.precoPlano, { fontSize:24, marginTop:0 }]}>Grátis</Text>
                                    <Text style={styles.mes}>POR 1 MÊS</Text>                              
                                </View>
                                
                                <View style={{marginLeft:16}}><Text style={styles.tituloPlano}>Premium Duo </Text></View>
                                
                            </View>

                                <Text style={styles.planoDesc}>
                                        2 contas Premium. Duo Mix: playlist compartilhada para dois. escute músicas sem anúncios. baixe conteúdo para ouvir offline. Pule quantas faixas quiser. Curtaa o som sob demanda. Cancele quando.
                                </Text>
                            <View style={styles.sejaPremiumButton}>
                                <Text style={[styles.sejaPremiumText, {fontSize:11}]}>EXPERIMENTE 1 MÊS GRÁTIS</Text>
                            </View>
                            <Text style={styles.planoTextMiudo}>
                                Apenas R$21,90/mês após o período da oderta.
                            </Text>
                            <View style={{flexDirection:'row', alignSelf:'center'}}>
                              <Text style={[styles.planoTextMiudo,{width:'auto'}]}>
                                Cancele quando quiser. Sujeito a  
                            </Text>  
                            <Text> </Text>
                            <Text style={[styles.planoTextMiudo, {color: '#FFF', width:'auto'}]}>
                                termos e condições.
                            </Text>  
                            </View>
                            

                        </View>



                        <View style={[styles.planoPrePago, {backgroundColor: '#652e7d',}]}>
                            <View style={{flexDirection:'row-reverse', marginTop:16, width:'100%', justifyContent:'space-between'}}>
                                
                                <View>
                                    <Text style={[styles.precoPlano, { fontSize:24, marginTop:0 }]}>Grátis</Text>
                                    <Text style={styles.mes}>POR 1 MÊS</Text>                              
                                </View>
                                
                                <View style={{marginLeft:16}}><Text style={styles.tituloPlano}>Premium Família </Text></View>
                                
                            </View>

                                <Text style={styles.planoDesc}>
                                        Até 6 contas Premium. Family Mix: playlist compartilhada. Bloqueie a reprodução de músicas com conteúdo explícito. Escute músic sem anúncios. Baixe conteúdo para ouvir offline. Pule quantas faixas quiser. Curta o som sob demanda. Cancele quando quiser.
                                </Text>
                            <View style={styles.sejaPremiumButton}>
                                <Text style={[styles.sejaPremiumText, {fontSize:11}]}>EXPERIMENTE 1 MÊS GRÁTIS</Text>
                            </View>
                            <Text style={styles.planoTextMiudo}>
                                Apenas R$26,90/mês após o período da oderta.
                            </Text>
                            <View style={{flexDirection:'row', alignSelf:'center'}}>
                              <Text style={[styles.planoTextMiudo,{width:'auto'}]}>
                                Cancele quando quiser. Sujeito a  
                            </Text>  
                            <Text> </Text>
                            <Text style={[styles.planoTextMiudo, {color: '#FFF', width:'auto'}]}>
                                termos e condições.
                            </Text>  
                            </View>
                            

                        </View>


                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height: Dimensions.get('screen').height*0.963,
        marginTop:Dimensions.get('screen').height*0.037,
        
    },
    slide:{
        height:140,
        width:280,
        flexDirection:'row',
    },
    title:{
        color:'#FFF',
        textAlign:'center',
        fontFamily:'Roboto-Bold',
        fontSize:18,
        width:'70%',    
    },
    freeBox:{
        flex:2,
        backgroundColor: '#333333',
        borderTopStartRadius:10,
        borderBottomStartRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    premiumBox:{
        flex:2,
        backgroundColor: '#0fb073',
        borderTopEndRadius:10,
        borderBottomEndRadius:10,
        justifyContent:'center',
        alignItems:'center'
    
    },
    styleCarrouselType:{
        position:'absolute',
        top: 5,
    },

    CarrouselTypeText:{
        color:'#bababa',
        fontFamily:'Roboto',
        fontSize:12   
    },
    premiumTopcontainer:{
        height:Dimensions.get('screen').height-140,
    },
    sejaPremiumButton:{
        width:'60%',
        height:55,
        backgroundColor: '#FFF',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:28,
        alignSelf:'center',
        marginBottom:16
    },
    sejaPremiumText:{
        fontFamily:'Roboto-Bold',
        fontSize:16,
        color:'#000',
    },
    expemimenteText:{
        color:'#FFF',
        fontSize:32,
        fontFamily:'Roboto-Bold',
        width:'80%',
        alignSelf:'center',
        textAlign:'center',
        marginTop:'15%',
        marginBottom:'8%',
    },
    compaText:{
        color:'#bababa',
        fontFamily:'Roboto',
        textAlign:'center',
        alignSelf:'center',
        fontSize:11,
    },
    premiumBottomcontainer:{
        flex:1,
        backgroundColor: '#111111',
        paddingBottom:120
    },
    planoAtualBox:{
        width:'90%',
        alignSelf:'center',
        height:70,
        backgroundColor: '#333333',
        borderRadius:10,
        justifyContent:'center',
        marginTop:16,
    },
    planoPrePago:{
        width:'90%',
        alignSelf:'center',
        borderRadius:10,   
        minHeight:300,
        backgroundColor: '#509bf5',
        marginTop:16,
    },
    tituloPlano:{
        color:'#FFF',
        fontFamily:'Roboto-Bold',
        alignSelf:'flex-start',
        fontSize:17,
        marginLeft:'10%',
        marginBottom:0,
    },
    precoPlano:{
        color:'#FFF',
        fontFamily:'Roboto-Bold',
        alignSelf:'flex-end',
        fontSize:12,
        marginRight:'15%',
        marginTop:16
    },
    mes:{
        color:'#bababa',
        fontFamily:'Roboto',
        alignSelf:'flex-end',
        fontSize:12,
        marginRight:'15%',
    },
    planoDesc:{
        width:'80%',
        color:'#FFF',
        fontFamily:'Roboto',
        fontSize:15,
        textAlign:'center',
        alignSelf:'center',
        marginTop:20,
    },
    planoTextMiudo:{
        width:'80%',
        color:'#bababa',
        fontFamily:'Roboto',
        fontSize:11,
        textAlign:'center',
        alignSelf:'center',
    }

});