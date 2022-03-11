import { combineReducers, createStore } from 'redux'
import { Userreducer } from './reducers/User'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducers = combineReducers({
    users:Userreducer
})

export const store =createStore(reducers,composeWithDevTools())