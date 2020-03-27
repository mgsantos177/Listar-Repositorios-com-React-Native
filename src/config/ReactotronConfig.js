import Reactotron from 'reactotron-react-native';

if (__DEV__) {
    const tron = Reactotron.configure({ host: '172.17.215.161' })
        .useReactNative()
        .connect();

    console.tron = tron;

    tron.clear();
}
