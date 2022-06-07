import { StyleSheet, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {buttonStyles} from '../styles/button';
import {shadows} from '../styles/shadows';
import colors from '../styles/colors';

import {useApp, useUser} from '@realm/react';
import { useCallback } from 'react';

export default function UserScreen({ navigation }: RootTabScreenProps<'User'>) {
  // const realm = useRealm();
  const user = useUser();
  const app = useApp();

  const handleLogout = useCallback(() => {
    user?.logOut();
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.idText}>Syncing with app id: {app.id}</Text>
      <Pressable style={styles.authButton} onPress={handleLogout}>
        <Text
          style={styles.authButtonText}>{`Logout ${user?.profile.email}`}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  idText: {
    color: '#999',
    paddingHorizontal: 20,
  },
  authButton: {
    ...buttonStyles.button,
    ...shadows,
    backgroundColor: colors.purpleDark,
  },
  authButtonText: {
    ...buttonStyles.text,
  },
});
