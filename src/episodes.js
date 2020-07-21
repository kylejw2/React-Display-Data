import React from 'react';
import ReactDOM from 'react-dom';
import files from './stranger-things-data.json';


const Episodes = () => {
    const myEpisodes = files._embedded.episodes.map(episode => {
        return (<div key={episode.id}>
                    <img src={episode.image.original} width="200" height="100"/>
                    <p>{episode.name}</p>
                </div>)
    })
    return myEpisodes;
}

export default Episodes;