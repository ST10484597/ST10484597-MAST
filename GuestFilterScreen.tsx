import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MenuItem } from "../types";

export default function GuestFilterScreen() {
const [menu, setMenu] = useState<MenuItem[]>([]);
const [filter, setFilter] = useState("All");

const loadMenu = async () => {
const data = await AsyncStorage.getItem("menuItems");
setMenu(data ? JSON.parse(data) : []);
};

useEffect(() => { loadMenu(); }, []);

const filteredMenu = filter === "All" ? menu : menu.filter(m => m.course === filter);

return (
<View style={styles.container}>
<Text style={styles.title}>Guest Menu</Text>

<View style={styles.buttons}>
{["All", "Starter", "Main", "Dessert"].map(c => (
<Button key={c} title={c} onPress={() => setFilter(c)} />
))}
</View>

<FlatList
data={filteredMenu}
keyExtractor={item => item.id}
renderItem={({ item }) => (
<View style={styles.card}>
<Text>{item.name}</Text>
<Text>{item.course}</Text>
<Text>R{item.price}</Text>
</View>
)}
/>
</View>
);
}

const styles = StyleSheet.create({
container: { flex: 1, padding: 20 },
title: { fontSize: 22, fontWeight: "bold" },
buttons: { flexDirection: "row", justifyContent: "space-around", marginVertical: 10 },
card: { borderWidth: 1, borderColor: "#ddd", padding: 10, marginVertical: 5 },
});
