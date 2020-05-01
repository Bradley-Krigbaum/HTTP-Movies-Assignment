import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import Axios from 'axios';


const MovieUpdate = () => {

    const [movie, setMovie] = useState(null);
    const [updatedMovie, setUpdatedMovie] = useState({});


    const history = useHistory();

    const params = useParams();

    const fetchMovie = (id) => {
        Axios
          .get(`http://localhost:5000/api/movies/${id}`)
          .then((res) => setMovie(res.data))
          .catch((err) => console.log(err.response));
    };
    

    useEffect(() => {
        fetchMovie(params.id);
    }, [params.id]);

    if (!movie) {
        return <div>Loading movie information...</div>;
    }


    const handleSubmit = e => {
        e.preventDefault();
        
        Axios
        .put(`http://localhost:5000/api/movies/${movie.id}`, {...updatedMovie, id: movie.id, stars: updatedMovie.stars.split(',')})
        .then(res => {
            console.log(res);
        })
        .catch(err => console.error('bk: MovieUpdate.js: handleSubmit: error: ', err));
        
        history.push('/');
        window.location.reload();
    }

    const changeHandler = e => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === "metascore") {
          value = parseInt(value, 10);
        } else if(e.target.name === 'stars') {
            const valueArray = [value];

            setUpdatedMovie({
                ...updatedMovie,
                stars: valueArray
            })
        }
    
        setUpdatedMovie({
            ...updatedMovie,
            [e.target.name]: value
        });
    }



    return(
        <>
            {console.log('bk: MovieUpdate: new movie: ', updatedMovie)}
            {console.log('bk: MovieUpdate: movie: ', movie)}



            <div className='Form' >
                <form onSubmit={handleSubmit}>

                    <input
                    type="text"
                    name="title"
                    onChange={changeHandler}
                    placeholder="Title"
                    value={updatedMovie.title}
                    />

                    <input
                    type="text"
                    name="director"
                    onChange={changeHandler}
                    placeholder="Director"
                    value={updatedMovie.director}
                    />

                    <input
                    type="number"
                    name="metascore"
                    onChange={changeHandler}
                    placeholder="Metascore"
                    value={updatedMovie.metascore}
                    />

                    <input
                    type="text"
                    name="stars"
                    onChange={changeHandler}
                    placeholder="star"
                    value={updatedMovie.stars}
                    />

                    <button>Update Movie</button>
                </form>
            </div>
        </>
    )
}

export default MovieUpdate;