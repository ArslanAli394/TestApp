import React from 'react';

const MovieItem = ({item}) =>{
    const {Poster,Title,Year,imbdID } = item;
    return(
            <div style={{ width : "100%",height:"400px"}} className="card my-5 mx-10">
                <div className='card-body d-flex justify-content-start'>
                    <div className='ml-5'>
                        <img style={{width:'50%',height:"350px"}} src={Poster} alt="image"/>
                    </div>
                    <div style={{position:"absolute",left:"250px"}} className='py-5'>
                        <div>
                           <h2>{Title}</h2> 
                        </div>
                        <div>{Year}</div>
                        <div>{imbdID}</div>
                    </div>
                </div>
            </div>
        
    )
}

export default MovieItem;