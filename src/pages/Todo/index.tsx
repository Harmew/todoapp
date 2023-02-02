import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

type TodoProps = {
  id: number;
  text: string;
  completed: boolean;
};

export function Todo(): JSX.Element {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([] as TodoProps[]);
  const [filtred, setFiltred] = useState(false);

  // Functions
  const handleButtonClick = (): void => {
    if (text.length > 0) {
      let newTodo: string | TodoProps = text;
      const todo = todos[todos.length - 1];
      if (newTodo.trim().length === 0) return;
      if (!todo) newTodo = { id: 1, text, completed: false };
      else {
        const id = todo.id + 1;
        newTodo = { id, text, completed: false };
      }
      setTodos([...todos, newTodo]);
      setText("");
    }
  };

  const comfirmPrompt = (id: number): void => {
    const todoItem = todos.filter((todo) => todo.id === id);
    Alert.alert("Deletar", `Deseja excluir: ${todoItem[0].text}`, [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel",
      },
      { text: "Apagar", onPress: () => deleteTodo(id) },
    ]);
  };

  const deleteTodo = (id: number): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id: number): void => {
    const newTodo = todos.map((todo) => {
      if (todo.id !== id) return todo;
      else return { ...todo, completed: !todo.completed };
    });
    setTodos(newTodo);
  };

  const renderItem = (item: TodoProps): JSX.Element => (
    <TouchableOpacity
      onPress={() => completeTodo(item.id)}
      style={[
        styles.itemTodo,
        { backgroundColor: item.completed ? "#326522" : "#757575" },
      ]}
    >
      <Text>{item.text}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => comfirmPrompt(item.id)}
      >
        <Text>&#x2715;</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Adicione um Item</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Escreva aqui.."
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.buttonAdd} onPress={handleButtonClick}>
        <Text style={styles.buttonAddText}>Adicionar</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.flatlist}
        data={filtred ? todos.filter((todo) => todo.completed === true) : todos}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: filtred ? "#326522" : "#E05900" },
        ]}
        onPress={() => setFiltred(!filtred)}
      >
        <Text style={styles.buttonText}>&#9745;</Text>
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
    color: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    marginHorizontal: 20,
    marginTop: 10,
    height: 50,
    padding: 10,
    borderRadius: 7,
    backgroundColor: "#3b3b3b",
    color: "#fff",
  },
  buttonAdd: {
    backgroundColor: "#E05900",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 7,
    padding: 10,
    height: 50,
  },
  buttonAddText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  flatlist: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  itemTodo: {
    paddingLeft: 10,
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  deleteButton: {
    padding: 15,
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 28,
  },
});
