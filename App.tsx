import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

const regex = /^[0-1]{1,}$/g;

export default function App() {

  const [value, setValue] = useState<string>('');
  const [res, setRes] = useState<string>('');

  const verifyDigit = (newValue: string) => {
    let array = newValue.split('');
    if (array[array.length - 1] === '0' || array[array.length - 1] === '1' || array.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  const convertValue = (newValue: string) => {
    let decValue = parseInt(newValue, 2);
    let finalValue = decValue.toString();
    setRes(finalValue);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bin2Dec</Text>
      <Text>Insira um valor binário</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={value}
        onChangeText={(digit: string) => {
          verifyDigit(digit)
            ? (
              setValue(digit)
            )
            : (
              alert("Valor inválido!")
            )
        }
        }
        onSubmitEditing={() => convertValue(value)}
      />

      <TouchableOpacity
        style={styles.but}
        onPress={() => convertValue(value)} >
        <Text style={styles.butText}>Clique aqui</Text>
      </TouchableOpacity>
      <Text>{res}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold'
  },
  but: {
    width: '90%',
    height: 75,
    backgroundColor: '#202020',
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 5
  },
  butText: {
    color: 'white',
    fontSize: 36
  }
});
