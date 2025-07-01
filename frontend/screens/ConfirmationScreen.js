import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

export default function ConfirmationScreen() {
  return (
    <View style={styles.formCard}>
      <Text style={styles.header}>✅ Thank You!</Text>
      <Text style={styles.paragraph}>
        A technician will be with you shortly.
      </Text>
    </View>
  );
}
