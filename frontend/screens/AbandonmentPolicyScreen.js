import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styles from "../styles";

export default function AbandonmentPolicyScreen({
  ackAbandon,
  setAckAbandon,
  onSubmit,
}) {
  return (
    <View style={styles.formCard}>
      <Text style={styles.label}>DEVICE ABANDONMENT POLICY</Text>
      <Text style={styles.paragraph}>
        {`Devices left at Smart Phone Repair for over 30 DAYS after repair completion, despite contact attempts using provided information, are considered abandoned.
A $15 storage fee applies. After 90 DAYS, devices will be disposed of per our Privacy Policy. Unpaid balances may be recouped using device parts.`}
      </Text>

      <TouchableOpacity
        style={[styles.confirmButton, ackAbandon && styles.confirmButtonActive]}
        onPress={() => setAckAbandon(true)}
      >
        <Text style={styles.confirmButtonText}>
          {ackAbandon ? "✅ Confirmed" : "Tap to Confirm"}
        </Text>
      </TouchableOpacity>

      <Button title="Submit Check-In" onPress={onSubmit} />
    </View>
  );
}
