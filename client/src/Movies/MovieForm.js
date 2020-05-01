import React from 'react';


const MovieForm = (movie) => {

    const handleSubmit = e => {

    }

    const changeHandler = e => {

    }

    return(
        <>
            <div className='Form' >
                <form onSubmit={handleSubmit}>

                    <input
                    type="text"
                    name="title"
                    onChange={changeHandler}
                    placeholder="Title"
                    value={movie.title}
                    />

                    <input
                    type="text"
                    name="director"
                    onChange={changeHandler}
                    placeholder="Director"
                    value={movie.director}
                    />

                    <input
                    type="number"
                    name="metascore"
                    onChange={changeHandler}
                    placeholder="Metascore"
                    value={movie.metascore}
                    />

                    <input
                    type="array"
                    name="description"
                    onChange={changeHandler}
                    placeholder="Lead Star"
                    value={movie.stars}
                    />

                    <input
                    type="array"
                    name="description"
                    onChange={changeHandler}
                    placeholder="Second Star"
                    value={movie.stars}
                    />

                    <input
                    type="array"
                    name="description"
                    onChange={changeHandler}
                    placeholder="Third Star"
                    value={movie.stars}
                    />

                    <button>Update Movie</button>
                </form>
            </div>
        </>
    )
}

export default MovieForm;