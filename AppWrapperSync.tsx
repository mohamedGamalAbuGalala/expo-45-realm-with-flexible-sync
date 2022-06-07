import React from 'react';
import {AppProvider, UserProvider} from '@realm/react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

// import {TaskRealmContext} from './models';
import {LoginScreen} from './components/LoginScreen';
import colors from './styles/colors';
import Navigation from './navigation';
import useColorScheme from './hooks/useColorScheme';
// import {AppSync} from './AppSync';

export const AppWrapperSync: React.FC<{
  appId: string;
}> = ({appId}) => {
  const colorScheme = useColorScheme();

  // const {RealmProvider} = TaskRealmContext;

  // If we are logged in, add the sync configuration the the RealmProvider and render the app
  return (
    <SafeAreaView style={styles.screen}>
      <AppProvider id={appId}>
        <UserProvider fallback={LoginScreen}>
          <Navigation colorScheme={colorScheme} />
          {/* <RealmProvider sync={{flexible: true}}>
            <AppSync />
          </RealmProvider> */}
        </UserProvider>
      </AppProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});

export default AppWrapperSync;