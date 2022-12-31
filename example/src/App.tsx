import * as React from 'react';

import {
  PermissionsAndroid,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { start, stop } from '@criveroib/react-native-beacon-emitter';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => start('ffff0000-0006-4d00-4958-4256571dd979', 65535, 0)}
      >
        <Text>Start</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity onPress={() => stop()}>
        <Text>Stop</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION!,
            {
              title: 'ACCESS FINE LOCATION',
              message: 'I need "Access Fine Location" permission.',
              buttonNegative: 'Cancel',
              buttonPositive: 'Accept',
            }
          );
        }}
      >
        <Text>Access Fine Location</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity
        onPress={async () => {
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN!,
            {
              title: 'BLUETOOTH_SCAN',
              message: 'I need "Bluetooth Scan" permission.',
              buttonNegative: 'Cancel',
              buttonPositive: 'Accept',
            }
          );
        }}
      >
        <Text>Bluetooth Scan</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity
        onPress={async () => {
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE!,
            {
              title: 'BLUETOOTH_ADVERTISE',
              message: 'I need "Bluetooth Advertise" permission.',
              buttonNegative: 'Cancel',
              buttonPositive: 'Accept',
            }
          );
        }}
      >
        <Text>Bluetooth Advertise</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  separator: {
    height: 40,
  },
});
