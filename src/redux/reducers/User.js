import {ADD_USER, DELETE_USER} from '../action/ActionTypes'


const initialState = [];

export const Userreducer = (state = initialState, action) => {
    console.log("state ",state)
    switch (action.type) {
        case ADD_USER:
            return[...action.data]
        case DELETE_USER:
            // const updatedUser =
            return true
    default:
      return state;
  }
};
