import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const chats = createReducer({}, {
    [types.SET_SNAP](state, action) {
        return action.chats
    }
})