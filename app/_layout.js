import { Slot } from 'expo-router';
import { SafeAreaView, ScrollView } from 'react-native';
import Navbar from '../src/components/ui/navbar';

export default function MainLayout() {
  return (
    <SafeAreaView className="flex-1 h-screen bg-zinc-50">
      <ScrollView className="p-6 bg-zinc-100">
        <Slot />
      </ScrollView>
      <Navbar />
    </SafeAreaView>
  );
}
