import React from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";

// Type
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Ligga: { userId: string };
  Todo: { userId: string };
};

type Props = NativeStackScreenProps<RootStackParamList, "Ligga">;

export function Ligga({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Página Inicial</Text>
      <Text style={styles.subtitle}>Projetos</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate({ key: "Todo", name: "Todo" })}
      >
        <Text style={styles.buttonTitle}>Todo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242424",
    flex: 1,
  },
  title: {
    marginTop: 30,
    marginHorizontal: 20,
    fontSize: 24,
    color: "#fff",
  },
  subtitle: {
    color: "#fff",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 20,
    height: 50,
    alignItems: "center",
    borderRadius: 7,
    justifyContent: "center",
    backgroundColor: "#E05900",
  },
  buttonTitle: {
    fontSize: 14,
  },
});
