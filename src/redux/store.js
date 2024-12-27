import {createStore} from 'redux';
import rootReducers from './reducers';

//Directly using reducers in Store
// const initialState = {count : 0};

// const counterReducers = (state=initialState,action)=>{
//     switch(action.type){
//         case 'INCREMENT':
//             return {...state,count:state.count+1};
//         case 'DECREMENT':
//             return {...state,count:state.count-1};
//         default:
//             return state;
//     }
// };
// const store = createStore(counterReducers);

const store = createStore(rootReducers);

export default store;