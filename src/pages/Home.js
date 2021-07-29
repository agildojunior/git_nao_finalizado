import React from 'react';
import { View, Text, FlatList  } from 'react-native';
import { BoxText } from '../components/BoxText';
import { AntDesign } from '@expo/vector-icons';
import StyleGlobal from '../style/StyleGlobal';
import Colors from '../style/Colors';

export function Home (){
    return (
        <View style = {StyleGlobal.container}>
          <AntDesign name="github" size={98} color={Colors.colors.purple} />  
          <Text style={StyleGlobal.textIcon}> GIT.Networking </Text>
          <BoxText placeholder="Digite o nickname do usuário" />
        </View>
    );
}
