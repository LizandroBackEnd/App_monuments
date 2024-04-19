import { View, Text, Image, StyleSheet, Linking } from "react-native";
import React from "react";
import { useParams, Link } from 'react-router-native';
import { MONUMENTS } from '../data/monuments';

const MonumentDetail = () => {
    const { id } = useParams();

    const monument = MONUMENTS.find(monument => monument.id === parseInt(id));

    const openWebsite = (url) => {
        Linking.openURL(url)
    };

    if (!monument) {
        return (
            <View>
                <Text style={{ color: '#fff' }}>Monumento no encontrado</Text>
                <Link
                to="/"
                component={Text}
                >
                    <Text style={{ color: '#fff' }}>Regresar</Text>
                </Link>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{monument.name}</Text>
            <Image source={{ uri: monument.img }} style={styles.image} />
            <Text style={styles.description}>{monument.description}</Text>
            <View style={styles.containerButton}>
                <Link
                    to="/"
                    component={Text}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Volver</Text>
                </Link>
                <Text
                   onPress={() => openWebsite(monument.link)}
                    style={styles.button}
                >
                    Ver en wikipedia
                </Text>
                <Link
                    to="/"
                    component={Text}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Audio</Text>
                </Link>

            </View>
        </View>
    )
}

export default MonumentDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10, 
        color: '#fff'
    },
    image: {
        width: 250,
        height: 200,
        marginBottom: 10,
        borderRadius: 10
    },
    description: {
        textAlign: 'center', 
        color: '#fff'
    },
    containerButton: {
      flexDirection: 'row',
        gap: 10
    },
    button: {
        backgroundColor: '#0A2E36',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        color: '#fff'
    },
    buttonText: {
        color: '#fff'
    }
})
