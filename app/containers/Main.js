import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'

const {
    View,
    Text,
    StyleSheet,
} = ReactNative

class Main extends Component{
    constructor(props) {
        super(props)
         this.props.screenProps.initFirebase()
    }
    componentDidMount() {
       // this.listenForItems(this.itemsRef);
        this.props.screenProps.getChat()
    }


    // listenForItems(itemsRef) {
    //     itemsRef.on('value', (snap) => {
    //         // get children as an array
    //         var items = []
    //         console.log('SNAP')
    //     })
    // }

    render(){

        return ( 
            <View style= { styles.container }>
                <Text>I’m a container lol!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
});

function mapStateToProps(state){
    return{}
}

export default connect(mapStateToProps)(Main)