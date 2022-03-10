import moviesTypes from "./movieTypes"

const collection = [
    {
        id:2,
        name:"Ip Man",
        rating:5,
        detail:"fighting movie"
    
    },
    {
        id:3,
        name:"Age of Ultron",
        rating:5,
        detail:"Avenger movie"
    
    },
    {
        id:1,
        name:"Captain America",
        rating:5,
        detail:"Army Man"
    
    },
    {
        id:4,
        name:"Game of Throne",
        rating:5,
        detail:"Season 1"
    
    }
]
const INTIAL_STATE = {
    moviesList : collection
}

const movieReducer = (state = INTIAL_STATE, action) =>{
    switch (action.type) {
        case moviesTypes.GET_MOVIES_LIST:
            console.log(action.payload)
            return {...state, 
                moviesList : action.payload
            }
        case moviesTypes.SEARCH_MOVIE:
            return {
                ...state,
                moviesList:action.payload!==''?state.moviesList.filter(movie => movie.Title === action.payload):state.moviesList
            }
    
        default:
            return state;
    }
}

export default movieReducer;
