// CustomButton.js

import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CustomButton(props) {
    return (
        <TouchableOpacity style={{ ...styles.button, ...props.style, backgroundColor: props.color || '#5e0acc' }} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#5e0acc',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
});
