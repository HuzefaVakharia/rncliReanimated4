//App.js                                                                                                                                                                                                                                                                                                                 /* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//import liraries




/* 
Demo of Double Tab Gesture animation using React Native CLI, Ref video: https://www.youtube.com/watch?v=_WXvlby00Y8&t=127s

*/




import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, ImageBackground, Dimensions, Image} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { GestureHandlerRootView, PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withSpring, useAnimatedGestureHandler, useAnimatedStyle, withDelay, } from 'react-native-reanimated';


const ImageComponent=Animated.createAnimatedComponent(Image);







const App = () => {



  const scale=useSharedValue(0);
  const doubleTap=useCallback(()=>{
    scale.value=withSpring(1,undefined,(isFinished)=>{
      if(isFinished){
        scale.value=withDelay(100,withSpring(0));
      }
    })
  },[]);

  const animatedStyle=useAnimatedStyle(()=>{
    return {
      transform:[{scale:Math.max(scale.value,0)}]
    };
  });


  return (
    <GestureHandlerRootView style={{flex:1}}>
    <View style={styles.container}>
    <TapGestureHandler 
    onActivated={doubleTap}
    numberOfTaps={2}
    maxDelayMs={250}
    >
      <Animated.View style={{
        backgroundColor:'#ffffff',
        justifyContent: 'center',
            alignItems: 'center',  
        //marginTop: responsiveHeight(25),
        
        }}>
       
        <ImageBackground
          
          source={require('./images/India.png')}
          resizeMode="center"
          style={{
            borderColor:'#000000',
            borderWidth:0.5,
            width:responsiveWidth(90),
            height:responsiveHeight(90),
            //height:'100%',
            //width:Dimensions.get('window').width,
            //height:Dimensions.get('window').width+100,
            justifyContent: 'center',
            alignItems: 'center',
            }}
          
          >

            <ImageComponent 
            source={require('./images/star.png')}
          //resizeMode="cover"
          style={[{width:200,height:200,},animatedStyle]}
            ></ImageComponent>
          </ImageBackground>    


        
      </Animated.View>
      </TapGestureHandler>
    </View>
    </GestureHandlerRootView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;