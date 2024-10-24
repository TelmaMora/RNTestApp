import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, RefreshControl, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';



export default function ListScreen({ navigation }) {
    const [posts, setPosts] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchPosts = async () => {
        const API_HOST = process.env.EXPO_PUBLIC_API_HOST;

        console.log(API_HOST);
        console.log(API_HOST)
        const response = await axios.get(`${API_HOST}/posts`);
        setPosts(response.data);

    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        fetchPosts().then(() => setRefreshing(false));
    };

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail', { post: item })}>
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    card: {
        marginHorizontal: 8
    },
    item: {
        padding: 16,
        marginVertical: 4,
        marginHorizontal: 4,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemBody: {
        fontSize: 14,
        color: '#555',
    },
});