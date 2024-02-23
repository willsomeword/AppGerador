import React from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons'


export  function PasswordItem( { data, removePassword }){
   
    return(
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{data}</Text>
            <Ionicons name="checkmark-circle" size={32} color="aqua" ontouch={styles.blackText} />
        </Pressable>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#0e0e0e",
        padding:14,
        width:"100%",
        marginBottom:14,
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    text:{
        color:"#fff"
    },
    blackText: {
        color: "#0e0e0e" // Cor preta
    }
})