import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const recipeData: Record<
  string,
  {
    title: string;
    image: { uri: string };
    description: string;
    time: string;
    ingredients: { name: string; icon: string }[];
    instructions: string[];
    nutrition: {
      protein: number;
      fat: number;
      carbs: number;
    };
  }
> = {
  '1': {
    title: 'Quesadilla',
    image: {
      uri: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    description: 'Delicious Mexican-style Quesadilla with cheese and vegetables.',
    time: '15 min',
    ingredients: [
      { name: 'Cheese', icon: 'https://img.icons8.com/color/96/cheese.png' },
      { name: 'Tomato', icon: 'https://img.icons8.com/color/96/tomato.png' },
      { name: 'Onion', icon: 'https://img.icons8.com/color/96/onion.png' },
    ],
    instructions: ['Heat pan', 'Fill tortilla', 'Cook until golden'],
    nutrition: {
      protein: 18,
      fat: 22,
      carbs: 35,
    },
  },
  '2': {
    title: 'Pilaf with seafood',
    image: {
      uri: 'https://images.pexels.com/photos/1199959/pexels-photo-1199959.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    description: 'Flavorful rice pilaf with shrimp, mussels, and spices.',
    time: '25 min',
    ingredients: [
      { name: 'Rice', icon: 'https://img.icons8.com/color/96/rice-bowl.png' },
      { name: 'Garlic', icon: 'https://img.icons8.com/color/96/garlic.png' },
      { name: 'Green Peas', icon: 'https://img.icons8.com/color/96/peas.png' },
      { name: 'Olive Oil', icon: 'https://img.icons8.com/color/96/olive-oil.png' },
    ],
    instructions: ['Boil rice', 'Cook seafood', 'Mix and serve'],
    nutrition: {
      protein: 24,
      fat: 10,
      carbs: 42,
    },
  },
  '3': {
    title: 'Tom Yam',
    image: {
      uri: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    description: 'Spicy Thai soup with shrimp, mushrooms, and herbs.',
    time: '20 min',
    ingredients: [
      { name: 'Mushrooms', icon: 'https://img.icons8.com/color/96/mushroom.png' },
      { name: 'Lime', icon: 'https://img.icons8.com/color/96/lime.png' },
      { name: 'Chili', icon: 'https://img.icons8.com/color/96/chili-pepper.png' },
    ],
    instructions: ['Boil broth', 'Add ingredients', 'Simmer and serve'],
    nutrition: {
      protein: 20,
      fat: 8,
      carbs: 12,
    },
  },
  '4': {
    title: 'Ramen noodle soup',
    image: {
      uri: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    description: 'Rich and flavorful ramen with egg, noodles, and meat.',
    time: '30 min',
    ingredients: [
      { name: 'Egg', icon: 'https://img.icons8.com/color/96/egg.png' },
      { name: 'Noodles', icon: 'https://img.icons8.com/color/96/noodles.png' },
      { name: 'Corn', icon: 'https://img.icons8.com/color/96/corn.png' },
    ],
    instructions: ['Boil noodles', 'Prepare broth', 'Combine and garnish'],
    nutrition: {
      protein: 16,
      fat: 14,
      carbs: 40,
    },
  },
};

export default function RecipeDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const recipe = recipeData[id ?? '1'];

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.imageWrapper}>
        <Image source={recipe.image} style={styles.image} />
        <View style={styles.timeBadge}>
          <AntDesign name="clockcircle" size={12} color="#fff" />
          <Text style={styles.timeText}>{recipe.time}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.description}>{recipe.description}</Text>

        <Text style={styles.sectionTitle}>Instructions</Text>
        {recipe.instructions.map((step, idx) => (
          <Text key={idx} style={styles.text}>{idx + 1}. {step}</Text>
        ))}

        <Text style={styles.sectionTitle}>Nutritional Info (per serving)</Text>
        <Text style={styles.nutritionText}>• Protein: {recipe.nutrition.protein}g</Text>
        <Text style={styles.nutritionText}>• Fat: {recipe.nutrition.fat}g</Text>
        <Text style={styles.nutritionText}>• Carbohydrates: {recipe.nutrition.carbs}g</Text>

        <Text style={styles.sectionTitle}>Ingredients</Text>
        <View style={styles.iconRow}>
          {recipe.ingredients.map((item, idx) => (
            <View key={idx} style={styles.ingredientItem}>
              <Image source={{ uri: item.icon }} style={styles.ingredientIcon} />
              <Text style={styles.ingredientText}>{item.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 24,
    zIndex: 10,
    elevation: 4,
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  timeBadge: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  timeText: {
    color: '#fff',
    marginLeft: 4,
    fontSize: 12,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: '#ccc',
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  text: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 8,
  },
  nutritionText: {
    fontSize: 16,
    color: '#FFD700',
    marginTop: 8,
  },
  iconRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  ingredientItem: {
    alignItems: 'center',
    width: '20%',
    marginBottom: 16,
  },
  ingredientIcon: {
    width: 50,
    height: 50,
  },
  ingredientText: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  },
});
