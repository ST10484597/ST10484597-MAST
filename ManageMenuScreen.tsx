import React, { useState } from "react";
import { View, TextInput, Button, Text, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MenuItem } from "../types";
import { v4 as uuidv4 } from "uuid";

export default function ManageMenuScreen({ navigation }: any) {
const [menu, setMenu] = useState<MenuItem[]>([]);
const [dish, setDish] = useState("");
const [desc, setDesc] = useState("");
const [course, setCourse] = useState("");
const [price, setPrice] = useState("");

const saveMenu = async (updatedMenu: MenuItem[]) => {
setMenu(updatedMenu);
await AsyncStorage.setItem("menuItems", JSON.stringify(updatedMenu));
};

const addItem = async () => {
const newItem: MenuItem = {
id: uuidv4(),
name: dish,
description: desc,
course,
price: parseFloat(price),
};
await saveMenu([...menu, newItem]);
setDish(""); setDesc(""); setCourse(""); setPrice("");
};

const removeItem = async (id: string) => {
const updated = menu.filter(item => item.id !== id);
await saveMenu(updated);
};

return (
<View style={styles.container}>
<Text style={styles.title}>Manage Menu</Text>

<TextInput placeholder="Dish Name" style={styles.input} value={dish} onChangeText={setDish} />
<TextInput placeholder="Description" style={styles.input} value={desc} onChangeText={setDesc} />
<TextInput placeholder="Course (Starter/Main/Dessert)" style={styles.input} value={course} onChangeText={setCourse} />
<TextInput placeholder="Price" style={styles.input} value={price} keyboardType="numeric" onChangeText={setPrice} />

<Button title="Add Dish" onPress={addItem} />

<FlatList
data={menu}
keyExtractor={item => item.id}
renderItem={({ item }) => (
<View style={styles.card}>
<Text>{item.name}</Text>
<Button title="Remove" onPress={() => removeItem(item.id)} />
</View>
)}
/>
</View>
);
}

const styles = StyleSheet.create({
container: { flex: 1, padding: 20 },
title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
input: { borderWidth: 1, borderColor: "#ccc", padding: 8, marginVertical: 5 },
card: { borderWidth: 1, borderColor: "#ddd", padding: 10, marginVertical: 5 },
});
