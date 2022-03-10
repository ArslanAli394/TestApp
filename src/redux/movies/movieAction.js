import moviesTypes from "./movieTypes";
import axios from 'axios';


export const getMovies =()=> dispatch =>{ 
        axios.get('https://fake-movie-database-api.herokuapp.com/api?s=batman')
        .then(res =>{
            let link = res.data;
            console.log(link)
            dispatch({
                type:moviesTypes.GET_MOVIES_LIST,
                payload:link.Search
            })
            // axios.get(link)
            //     .then(data=>{
            //         console.log(data)
            //         dispatch(moviesData(data.data.Search))
                    
            //     }).catch(err=>console.log(err))
            
        })
        .catch(err => console.log(err))
    }


const moviesData = (data)=>(dispatch) =>{
    dispatch({
        type:moviesTypes.GET_MOVIES_LIST,
        payload:data
    })
}

export const searchMovie = (value) =>{
    return{
        type:moviesTypes.SEARCH_MOVIE,
        payload:value
    }
}