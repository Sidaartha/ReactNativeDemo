import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, Modal, Text, KeyboardAvoidingView } from "react-native";

import CustomButton from './CustomButton';

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
        setErrorMsg('');
    }

    function addGoalHandler() {
        if (enteredGoalText.trim().length === 0) {
            setErrorMsg('Please enter a valid goal!');
            return;
        }

        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <KeyboardAvoidingView 
                style={styles.inputContainer}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    placeholder="Your course goals!"
                    value={enteredGoalText}
                    onSubmitEditing={addGoalHandler}
                />
                {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <CustomButton
                            title="Cancel"
                            color="#C70000"
                            onPress={() => {
                                props.onCancel();
                                setErrorMsg('');
                            }}
                        />
                    </View>
                    <View style={styles.button}>
                        <CustomButton
                            title="Add Goal"
                            color="#5e0acc"
                            onPress={addGoalHandler}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    textInput: {
        width: '100%',
        borderColor: '#cccccc',
        borderWidth: 1,
        padding: 10
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    },
    image: {
        width: '100%',
        height: 400,
        margin: 20
    },
    errorText: {
        color: 'red',
        marginVertical: 8
    }
});
