import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { Stack } from 'expo-router'

const Rootlayout = () => {
  return (
    
      <Stack>
       <Stack.Screen name="index"/>
      </Stack>
  
  );
}

export default Rootlayout

const styles = StyleSheet.create({})
