import React from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

const recipes = [
  {
    id: '1',
    title: 'Quesadilla',
    time: '15 min',
    image: {
      uri: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', // yeni görsel
    },
  },
  {
    id: '2',
    title: 'Pilaf with seafood',
    time: '25 min',
    image: {
      uri: 'https://images.pexels.com/photos/1199959/pexels-photo-1199959.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', // yeni görsel
    },
  },
  {
    id: '3',
    title: 'Tom Yam',
    time: '20 min',
    image: {
      uri: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
  },
  {
    id: '4',
    title: 'Ramen noodle soup',
    time: '30 min',
    image: {
      uri: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
  },
];

const tabs = ['New', 'Popular', 'Breakfast', 'Snacks'];

export default function RecipesScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello, Kristin 👋</Text>
      <Text style={styles.subHeader}>What do you want to cook today?</Text>

      <TextInput
        placeholder="Find your favorite recipe..."
        placeholderTextColor="#aaa"
        style={styles.search}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabRow}
      >
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabButton,
              index === 0 ? styles.activeTab : styles.inactiveTab,
            ]}
          >
            <Text
              style={index === 0 ? styles.activeTabText : styles.inactiveTabText}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/recipes/${item.id}`)}
          >
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardTime}>⭐ 5.0   🕒 {item.time}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
  },
  subHeader: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 20,
  },
  search: {
    backgroundColor: '#1e1e1e',
    borderRadius: 14,
    padding: 12,
    color: '#fff',
    marginBottom: 16,
  },
  tabRow: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  tabButton: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginRight: 8,
    height: 28,
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  inactiveTab: {
    backgroundColor: '#333',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12,
  },
  inactiveTabText: {
    color: '#ccc',
    fontSize: 12,
  },
  card: {
    backgroundColor: '#1f1f1f',
    borderRadius: 20,
    padding: 12,
    width: '48%',
    marginBottom: 16,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 16,
    marginBottom: 8,
  },
  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardTime: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 4,
  },
});
