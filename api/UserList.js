import React, { useState, useEffect } from "react";
import { Text, FlatList, View, ActivityIndicator } from "react-native";
import axios from "axios";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <ActivityIndicator />;
    }

    if (error) {
        return <Text>Error: {error.message}</Text>;
    }

    return (
        <FlatList 
        data={users} 
        renderItem={({ item }) => {
            return(
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10
                }}>
                    <Text>Name: {item.name} </Text>
                    <Text>Company: {item.company.name} </Text>
                </View>
            );
            }}
        key={item => item.id}
        />
    )
}

export default UserList;