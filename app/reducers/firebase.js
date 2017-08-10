import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const firebase = createReducer({}, {
    [types.SNAP](state, action) {
        let newState = {}
        return newState
    }
})