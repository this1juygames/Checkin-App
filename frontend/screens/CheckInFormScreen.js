import React from "react";
import { View, TextInput, Button } from "react-native";
import styles from "../styles";

export default function CheckInFormScreen({ form, onChange, onNext }) {
  const fields = [
    { key: "deviceType", placeholder: "Type of Device" },
    { key: "phoneNumber", placeholder: "Phone Number" },
    { key: "callbackNumber", placeholder: "Callback Number" },
    { key: "carrier", placeholder: "Carrier" },
    { key: "passcode", placeholder: "Device Passcode" },
    {
      key: "issueDescription",
      placeholder: "What issues are you having?",
      multiline: true,
    },
  ];

  return (
    <View style={styles.formCard}>
      {fields.map(({ key, placeholder, multiline }) => (
        <TextInput
          key={key}
          style={[styles.input, multiline && styles.textarea]}
          placeholder={placeholder}
          value={form[key]}
          onChangeText={(text) => onChange(key, text)}
          multiline={multiline}
        />
      ))}
      <Button title="Continue" onPress={onNext} />
    </View>
  );
}
