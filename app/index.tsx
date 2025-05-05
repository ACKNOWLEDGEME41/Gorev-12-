import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/8130687/pexels-photo-8130687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Healthy food is <Text style={styles.highlight}>goooood</Text>
        </Text>
        <Text style={styles.subtitle}>
          More than 10,000 recipes for every day and taste
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/recipes')}>
          <Text style={styles.buttonText}>Let's get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  image: {
    width: '100%',
    height: '55%',
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  highlight: {
    color: '#f4bd47',
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#f4bd47',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
});
