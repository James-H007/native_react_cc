import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Profile from './profile'

const RootLayout = () => {
    return (
        <View style={styles.container}>
            <Text>Aora</Text>
            <StatusBar style="auto" />
            <Link href="/profile" style={{ color: 'blue' }}>
                Profile
            </Link>
        </View>
    )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
