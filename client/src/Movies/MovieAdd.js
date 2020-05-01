import React from 'react';
import Axios from 'axios';

const MovieAdd = (newMovie) => {

    const handleSubmit = e => {
        e.preventDefault();
        Axios
            .post('http://localhost:5000/api')
            .then(response => {
                console.log(response)

            })
            .catch(err => console.log(err));
    }

    return(
        <>
        </>
    )
}

export default MovieAdd;