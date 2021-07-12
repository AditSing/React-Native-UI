import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { IconAccount, IconAccountActive, IconHome, IconHomeActive, IconOrder, IconOrderActive } from '../../assets'

const icon = ({label, isFocused}) => {
  
  let ret
  if(label ==  "home")  {
    ret = (
      <Image
        source={isFocused ? IconHomeActive : IconHome }
      />
    )
  } else if(label ==  "order")  {
    ret = (
      <Image 
        source={isFocused ? IconOrderActive : IconOrder }
      />
    )
  } else if(label ==  "account")  {
    ret = (
      <Image 
        source={isFocused ? IconAccountActive : IconAccount }
      />
    )
  } else {
    ret = (
      <Image 
        source={IconHome }
      />
    )
  }

  return ret
}

export default icon

const styles = StyleSheet.create({})
