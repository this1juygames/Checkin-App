import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import styles from "./styles";
import WelcomeScreen from "./screens/WelcomeScreen";
import FeeAcknowledgmentScreen from "./screens/FeeAcknowledgmentScreen";
import CheckInFormScreen from "./screens/CheckInFormScreen";
import AbandonmentPolicyScreen from "./screens/AbandonmentPolicyScreen";
import ConfirmationScreen from "./screens/ConfirmationScreen";

export default function App() {
  const [screen, setScreen] = useState(1);
  const [form, setForm] = useState({
    fullName: "",
    deviceType: "",
    phoneNumber: "",
    callbackNumber: "",
    carrier: "",
    passcode: "",
    issueDescription: "",
  });
  const [ackFee, setAckFee] = useState(false);
  const [ackAbandon, setAckAbandon] = useState(false);

  const handleChange = (key, value) => {
    if (key === "fullName") {
      value = value
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    }
    if (key === "phoneNumber" || key === "callbackNumber") {
      const cleaned = value.replace(/[^\d]/g, "");
      const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
      value = match
        ? [match[1], match[2], match[3]].filter(Boolean).join("-")
        : value;
    }
    setForm({ ...form, [key]: value });
  };

  const validateName = () => form.fullName.trim().split(" ").length >= 2;

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://192.168.0.9:5051/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setScreen(5);
        setTimeout(() => {
          setForm({
            fullName: "",
            deviceType: "",
            phoneNumber: "",
            callbackNumber: "",
            carrier: "",
            passcode: "",
            issueDescription: "",
          });
          setAckFee(false);
          setAckAbandon(false);
          setScreen(1);
        }, 4000);
      } else {
        alert("Error: Failed to submit check-in.");
      }
    } catch (error) {
      alert("Network Error: " + error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {screen === 1 && (
        <WelcomeScreen
          fullName={form.fullName}
          onChange={handleChange}
          onNext={() =>
            validateName()
              ? setScreen(2)
              : alert("Please enter first and last name.")
          }
        />
      )}
      {screen === 2 && (
        <FeeAcknowledgmentScreen
          ackFee={ackFee}
          setAckFee={setAckFee}
          onNext={() =>
            ackFee
              ? setScreen(3)
              : alert("You must acknowledge the check-in fee.")
          }
        />
      )}
      {screen === 3 && (
        <CheckInFormScreen
          form={form}
          onChange={handleChange}
          onNext={() => setScreen(4)}
        />
      )}
      {screen === 4 && (
        <AbandonmentPolicyScreen
          ackAbandon={ackAbandon}
          setAckAbandon={setAckAbandon}
          onSubmit={() =>
            ackAbandon
              ? handleSubmit()
              : alert("You must acknowledge the policy.")
          }
        />
      )}
      {screen === 5 && <ConfirmationScreen />}
    </ScrollView>
  );
}
