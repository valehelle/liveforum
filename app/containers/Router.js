import { TabNavigator, StackNavigator } from 'react-navigation'
import Home from './Home'
import Main from './Main'
import ReactNative from 'react-native'

const {
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
} = ReactNative


export const HomeStack = StackNavigator({
    Home:{
        screen: Home,
        navigationOptions:{
            title: 'Home',
        }
    },
})

export const Root = StackNavigator({
    Main: {
        screen: Main,
    },

}, {
    mode: 'modal',
    headerMode: 'none',
})

