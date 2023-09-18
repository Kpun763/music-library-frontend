import React, { useState } from 'react';
const NewMusicForm = ({}) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');


    return ( <form className="flex-item">
        <h4>Add Music</h4>
        <div>
            <label>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
            <label>Artist</label>
            <input value={artist} onChange={(e) => setArtist(e.target.value)} />
        </div>
        <div>
            <label>Album</label>
            <input value={album} onChange={(e) => setAlbum(e.target.value)} />
        </div>
        <div>
            <label>Genre</label>
            <input value={genre} onChange={(e) => setGenre(e.target.value)} />
        </div>
        <div>
            <label>Release Date</label>
            <input value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
        </div>
    </form> );
}
 
export default NewMusicForm;