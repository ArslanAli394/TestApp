import React,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import MovieItem from '../components/moviesItem/movies-item';
import { getMovies } from '../redux/movies/movieAction';


const MoviesList = () =>{
    const dispatch = useDispatch();
    const moviesCollection = useSelector(state => state.movies.moviesList);
    console.log(moviesCollection)

    useEffect(()=>{
        dispatch(getMovies());       
    },[])
    return (
        <div className='container'>
            {
                moviesCollection && 
                moviesCollection.map((movies) =>{
                   return  <MovieItem key={movies.imbdID} item={movies}/>
                })
            }
        </div>
    )
}


export default MoviesList;