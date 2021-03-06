import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 50,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.colors.background
      },
      textIcon: {
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#8257E5'
      },
    buttonText: {
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 35,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10
    }
});