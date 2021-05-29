import React from 'react';
import { useState } from 'react';
import {
   StyleSheet,
   SafeAreaView,
   Text,
   Image,
   View,
   TouchableOpacity,
   Animated
} from 'react-native';

import { icons, COLORS, SIZES, FONTS } from '../constants';

const Restaurant = ({ route, navigation }) => {

   const [restaurant, setRestaurant] = React.useState(null);   
   const [currentLocation, setCurrentLocation] = React.useState(null);   

   React.useEffect(() => {
      let { item, currentLocation } = route.params;

      setRestaurant(item);
      setCurrentLocation(currentLocation);
   })

   function renderHeader() {
      return (
         <View style={{ flexDirection: 'row', height: 50 }}>
            <TouchableOpacity
               style={{
                  width: 50,
                  paddingLeft: SIZES.padding,
                  justifyContent: 'center'
               }}
               onPress={() => navigation.goBack()}
            >
               <Image
                  source={icons.back}
                  resizeMode='contain'
                  style={{
                     width: 30,
                     height: 30
                  }}
               />
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <View style={{
                  width: '80%',
                  height: '100%',
                  backgroundColor: COLORS.lightGray3,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: SIZES.radius
               }}>
                  <Text style={{ ...FONTS.h3 }}>{restaurant?.name}</Text>
               </View>
            </View>
            <TouchableOpacity
               style={{
                  width: 50,
                  paddingRight: SIZES.padding,
                  justifyContent: 'center'
               }}
            >
               <Image
                  source={icons.list}
                  resizeMode='contain'
                  style={{
                     width: 30,
                     height: 30
                  }}
               />
            </TouchableOpacity>
         </View>
      )
   }

   return (
      <SafeAreaView style={styles.container}>
         {renderHeader()}
      </SafeAreaView>
   );
}

   const styles = StyleSheet.create({
      container: {
         flex: 1,
         padding: SIZES.padding,
         backgroundColor: COLORS.lightGray4
      },
      shadow: {
         shadowColor: '#000',
         shadowOffset: {
            width: 0,
            height: 3
         },
         shadowOpacity: 0.1,
         shadowRadius: 10,
         elevation: 2
      }
   })

export default Restaurant;