import React, {useEffect, useState} from 'react';
import {StyleSheet, View, PermissionsAndroid} from 'react-native';
import {Colors, IconButton, Title} from 'react-native-paper';

import {getDateTime} from './utils/getDateTime';
// import {sendFile} from './utils/sendFile';

const Main = () => {
  const [trees, setTrees] = useState<{key: string}[]>([]);

  const getPermissions = async () => {
    try {
      let permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      await PermissionsAndroid.request(permission);
      Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  };

  useEffect(() => {
    getPermissions();
  }, []);

  const addTree = () => {
    setTrees(t => [{key: getDateTime()}, ...t]);
  };

  const resetTree = () => {
    setTrees([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <IconButton
          icon="restart-alert"
          color={Colors.red500}
          size={60}
          onPress={resetTree}
        />

        <IconButton
          icon="email-fast"
          color={Colors.green500}
          size={60}
          // onPress={() => sendFile(trees)}
        />
      </View>

      <Title style={styles.text}>{trees.length}</Title>

      <IconButton
        icon="plus-circle"
        color={Colors.blue500}
        size={100}
        onPress={addTree}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
  },

  text: {
    fontSize: 60,
    padding: 80,
  },
});
