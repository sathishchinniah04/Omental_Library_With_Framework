import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-omental-framework' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const OmentalFramework = NativeModules.OmentalFramework
  ? NativeModules.OmentalFramework
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

    export function loadGame(): Promise<string> {
      return OmentalFramework.loadGame();
    }
