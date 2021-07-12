import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from './icon'

import { IconAccount, IconAccountActive, IconHome, IconHomeActive, IconOrder, IconOrderActive } from '../../assets'

const index = ({isFocused, onPress, onLongPress, label}) => {

  return (
    <TouchableOpacity
      // key={index}
      // accessibilityRole="button"
      // accessibilityState={isFocused ? { selected: true } : {}}
      // accessibilityLabel={options.tabBarAccessibilityLabel}
      // testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={{ flex: 1 }}>
      {/* <Icon
        label={label}
        isFocused={isFocused}
      /> */}
      <Image 
      style={{backgroundColor: 'transparent'}}
        source={IconAccountActive}
      />
      <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default index

const styles = StyleSheet.create({})
