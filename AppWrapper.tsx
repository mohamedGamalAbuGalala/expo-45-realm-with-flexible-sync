import 'expo-dev-client';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppWrapperSync from './AppWrapperSync';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { SYNC_CONFIG } from './sync.config';

export default function AppWrapper() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppWrapperSync appId={SYNC_CONFIG.appId} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
