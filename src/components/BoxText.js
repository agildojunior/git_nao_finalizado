import React from 'react';
import { StyleSheet, View, TextInput,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Colors from '../style/Colors';

export function BoxText({placeholder}) {
  return (
    <View style = {styles.containerBoxText}>
      <TextInput style = {styles.inputText} placeholder={placeholder} placeholderTextColor={Colors.colors.colorTextBoxText} />
      <TouchableOpacity style = {styles.button}>
         <AntDesign name="right" size={20} color='gray'/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    containerBoxText:{
      marginTop:40,
      width: '90%',
      height: 65,
      flexDirection:'row',
      alignItems: 'center',
      borderRadius: 7,
      backgroundColor: 'white'
    },
    inputText:{
      flex: 1,
      height: '100%',
      paddingLeft: 20,
      fontSize: 17,
    },
    button:{
      padding: 15,
      borderLeftWidth:1,
      borderLeftColor: 'grey',
    }
});