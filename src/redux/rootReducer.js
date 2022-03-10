import { combineReducers } from 'redux';

//reducers
import movieReducer from './movies/movieReducer';


const reducer = combineReducers({
    movies: movieReducer
})

export default reducer;