import * as types from './types'
import * as firebase from 'firebase';

export function initFirebase(ingredients){
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyDwRe6pTrLxM1H9u-rHoE-ECdaHz5Bzoxg",
        authDomain: "live-forum-caf1a.firebaseapp.com",
        databaseURL: "https://live-forum-caf1a.firebaseio.com",
        projectId: "live-forum-caf1a",
        storageBucket: "live-forum-caf1a.appspot.com",
        messagingSenderId: "576796571661"
    };
    this.firebaseApp = firebase.initializeApp(firebaseConfig);
    return {
        type: types.INIT_FIREBASE,
    }
}

export function getChat(){
    return(dispatch, getState) => {
        this.itemsRef = this.firebaseApp.database().ref('channel')
        itemsRef.on('value', (snap) => {
        // get children as an array
        let items = [];
        snap.forEach((child) => {
            items.push({
            name: child.val().name,
            _key: child.key
            });
        });
        let chats = {chats: items}
        return dispatch(setChat({chats}))
        });
    }
}
function setChat({chats}){
    return {
        type: types.SET_SNAP,
        chats
    }
}