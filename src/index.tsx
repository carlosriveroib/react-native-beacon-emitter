import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package '@criveroib/react-native-beacon-emitter' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ReactNativeBeaconEmitter = NativeModules.ReactNativeBeaconEmitter
  ? NativeModules.ReactNativeBeaconEmitter
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function start(uuid: string, major: number, minor: number): void {
  return ReactNativeBeaconEmitter.start(uuid, major, minor);
}

export function stop(): void {
  return ReactNativeBeaconEmitter.stop();
}
