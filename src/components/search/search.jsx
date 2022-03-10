import React, { useState } from 'react';

import Button from '../button/button';

import { useDispatch } from 'react-redux';
import { searchMovie } from '../../redux/movies/movieAction';

const Search = ({ customType, ...otherProps}) =>{
    const dispatch = useDispatch();

    const [searchValue,setSearchValue] = useState('');
    const handleClick = (e) =>{
        e.preventDefault();
        dispatch(searchMovie(searchValue));        
    }
    return (
        <div className='d-flex'>
        <div style={{width:"100%"}}>
        <input
            type={customType}
            {...otherProps}
            name="search"
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
        />
        </div>    
        
        <div className="mx-3">
        <Button onClick={(e)=>handleClick(e)} className='btn btn-secondary'>Search</Button>
      </div>
      </div>
    )
}

export default Search;
