import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styles from "../styles";

export default function FeeAcknowledgmentScreen({ ackFee, setAckFee, onNext }) {
  return (
    <View style={styles.formCard}>
      <Text style={styles.label}>Check-In Fee Acknowledgment</Text>
      <Text style={styles.paragraph}>
        {`CELL PHONES/TABLETS - $25
GAME SYSTEMS/COMPUTERS, ETC - $40
This fee is NON-REFUNDABLE in the event your device is unfixable.
If the device is fixable then the check-in fee will be applied towards the total cost of your repair.`}
      </Text>

      <TouchableOpacity
        style={[styles.confirmButton, ackFee && styles.confirmButtonActive]}
        onPress={() => setAckFee(true)}
      >
        <Text style={styles.confirmButtonText}>
          {ackFee ? "✅ Confirmed" : "Tap to Confirm"}
        </Text>
      </TouchableOpacity>

      <Button title="Continue to Check-In" onPress={onNext} />
    </View>
  );
}
