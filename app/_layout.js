import { SafeAreaView, ScrollView, Text } from 'react-native';
import { Slot } from 'expo-router';

export default function MainLayout() {
  return (
    <ScrollView className="p-6">
      <SafeAreaView className="flex-1 h-screen justify-center">
        <Slot />
      </SafeAreaView>
    </ScrollView>
  );
}
