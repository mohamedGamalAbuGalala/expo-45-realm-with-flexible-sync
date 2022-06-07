import React, {useCallback, useEffect, useMemo} from 'react';
import {useApp, useUser} from '@realm/react';
import {Pressable, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';

import {Task} from '../models/Task';
import {TaskRealmContext} from '../models';
import {TaskManager} from '../components/TaskManager';
import {buttonStyles} from '../styles/button';
import {shadows} from '../styles/shadows';
import colors from '../styles/colors';

const {useRealm, useQuery} = TaskRealmContext;


export default function TasksScreen() {
  const realm = useRealm();
  const user = useUser();
  const app = useApp();
  const result = useQuery(Task);

  const tasks = useMemo(() => result.sorted('createdAt'), [result]);

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(Task));
    });
  }, [realm, result]);

  return (
    <TaskManager tasks={tasks} userId={user?.id} />
  );
}
