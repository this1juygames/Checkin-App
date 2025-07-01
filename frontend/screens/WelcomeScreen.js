import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../styles";

export default function WelcomeScreen({ fullName, onChange, onNext }) {
  return (
    <View style={styles.formCard}>
      <Text style={styles.header}>Welcome to Smart Phone Repair</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        value={fullName}
        onChangeText={(text) => onChange("fullName", text)}
      />
      <Button title="Continue" onPress={onNext} />
    </View>
  );
}
