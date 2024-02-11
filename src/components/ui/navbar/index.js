import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { Favorite, History, Search } from '../../../icons';

export const routes = [
  { path: '/history', icon: <History /> },
  { path: '/', icon: <Search />, large: true },
  { path: '/favorite', icon: <Favorite /> },
];

export default function Navbar() {
  return (
    <View className="p-6 bg-zinc-50 flex-row items-center justify-center !max-h-20 h-full box-border">
      {routes.map((page, i) => (
        <Button page={page} key={i} />
      ))}
    </View>
  );
}

export function Button({ page }) {
  const { path, icon, large = false } = page;

  const viewLargeButton =
    'w-24 h-24 flex items-center justify-center rounded-full border-[10px] border-zinc-50';
  const viewClassNames = 'mx-4';
  const viewClassName = `${viewClassNames} ${large && viewLargeButton}`;

  const linkLargeClassName =
    'bg-red-600 rounded-full w-full h-full translate-y-0.5';
  const linkClassNames = 'p-4 flex-row items-center justify-center w-fit h-fit';
  const linkClassName = `${linkClassNames} ${large && linkLargeClassName}`;

  return (
    <View className={viewClassName}>
      <Link href={path}>
        <View className={linkClassName}>{icon}</View>
      </Link>
    </View>
  );
}
