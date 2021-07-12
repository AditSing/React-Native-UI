import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, View, Image, Animated, Easing } from 'react-native'

import { Logo, SplashBackground } from '../../assets/index'

const Splash = ({ navigation }) => {

  const opacity = new Animated.Value(0)

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(
        opacity,
        {
          toValue: 0.5,
          useNativeDriver: false
        }
      ).start();
    }, 500)
    setTimeout(() => {
      Animated.timing(
        opacity,
        {
          toValue: 1,
          useNativeDriver: false
        }
      ).start();
    }, 1000)
    setTimeout(() => {
      navigation.replace("MainApp")
    }, 2100)
  })
  
  return (
    <ImageBackground
      source={SplashBackground}
      style={styles.background}
    >
      <Animated.Image
        source={Logo}
        style={[styles.logo, {
          opacity: opacity
        }]}
      />
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 220,
    height: 100,
  }
})
