import {legacy_createStore as createStore } from 'redux'

const counterReducer = (state={counter:0}, action)=>{
    switch(action.type){
        case 'INCREMENT' : {
            return{ counter : state.counter+5}
        }
        case 'DECREMENT' : {
            return{ counter : state.counter-5}
        }
        default : return state
    }
}

const store = createStore(counterReducer)

export default store