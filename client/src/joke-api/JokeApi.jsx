import React, { useState } from 'react'
import axios from 'axios'
import './JokeApi.css'

const JokeApi = () => {

    const [joke, setJoke] = useState('');


    const getJoke = () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => setJoke(data.setup + '...' + data.punchline))
    }

    return (
        <div className='joke-container'>
            <div className='joke'>
                <button onClick={getJoke}>Get Joke</button> {joke}
            </div>
        </div>

    )
}

export default JokeApi