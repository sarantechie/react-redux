import {combineReducers} from 'redux';
import counterReducers from './counterReducers';

const rootReducers = combineReducers({
    counter:counterReducers,
});

export default rootReducers;