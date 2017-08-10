import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'

const {
    View,
    Text,
    StyleSheet,
} = ReactNative

class Main extends Component{
    render(){

        return ( 
            <View>
                <Text>Launch Screen!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    about:{
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 5,
    }
})

function mapStateToProps(state){
    return{}
}

export default connect(mapStateToProps)(Main)