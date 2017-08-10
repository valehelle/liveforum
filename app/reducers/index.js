import { combineReducers } from 'redux'
import * as recipesReducer from './recipes'
import * as firebaseReducer from './firebase'
import * as chatReducer from './chats'
export default combineReducers(Object.assign(
    recipesReducer,
    chatReducer,
    )
)