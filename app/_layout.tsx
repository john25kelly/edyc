import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Menu',
          }}
        />
        <Drawer.Screen
          name="downloads/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Downloads',
            title: 'Menu',
          }}
        />
        <Drawer.Screen
          name="race/(tabs)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Racing',
            title: 'Menu',
          }}
        />
        <Drawer.Screen
          name="results/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Results',
            title: 'Menu',
          }}
        />
        <Drawer.Screen
          name="noticeBoard/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Notice Board',
            title: 'Menu',
          }}
        />
        <Drawer.Screen
          name="calendar/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Calendar',
            title: 'Menu',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}