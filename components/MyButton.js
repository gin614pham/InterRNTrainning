import React, {useState} from "react";
import {Text, StyleSheet, TouchableOpacity} from "react-native";

export function MyButton({buttonColor}) {
    const [title, setTitle] = useState('ボタン');
    let count = 100;

    console.log("レンダー");

  return (
    <TouchableOpacity
    onPress={() => {
        count += 1;
        setTitle('タップされました');
      }}

      style={[styles.button, {backgroundColor: buttonColor}]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

  

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'salmon',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 5
    }
})