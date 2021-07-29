import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { BoxText } from '../components/BoxText';
import { AntDesign } from '@expo/vector-icons';
import StyleGlobal from '../style/StyleGlobal';
import Colors from '../style/Colors';

import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
cccc

export function Details (){
    return (
        <View style = {StyleGlobal.container}>
          
          <Text style={StyleGlobal.textIcon}> Nome da Pessoa </Text>
          <BoxText placeholder="Digite o nickname do usuário" />
        </View>
    );
}