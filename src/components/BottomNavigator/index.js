import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import { IconHomeActive } from '../../assets';
import { TabItem } from '../index';

const BottomNavigator = ({ state, descriptors, navigation }) => {
  console.log('BottomNavigator props',state, descriptors, navigation)
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        console.log('check',options)
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Image 
              source={IconHomeActive}
              style={{ 
                // color: 'black',
                // tintColor: 'black',
                borderColor: 'black',
                // display: 'flex'
                // shadowColor: 'black',
                // overlayColor: 'black',
                // backgroundColor: 'black',
              }}
            />
            {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default BottomNavigator

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: 55,
    paddingVertical: 15
  }
})
