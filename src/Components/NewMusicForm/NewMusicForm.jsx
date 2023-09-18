import React, { useState } from 'react';
import axios from 'axios';

const NewMusicForm = ({}) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      artist,
      album,
      genre,
      releaseDate
    };

    try {
      const response = await axios.post('https://localhost:7073/api/MusicLibrary', formData);
      console.log('Song added:', response.data);

      setTitle('');
      setArtist('');
      setAlbum('');
      setGenre('');
      setReleaseDate('');
    } catch (error) {
      console.error('Error adding song:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-item">
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
      <button type='submit'>Add Song</button>
    </form>
  );
}

export default NewMusicForm;