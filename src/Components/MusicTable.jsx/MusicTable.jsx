import React from "react";


function MusicTable({ music }) {
    return (
      <table className="flex-item">
        <thead>
          <tr>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {music.map((song) => (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.album}</td>
              <td>{song.artist}</td>
              <td>{song.genre}</td>
              <td>{song.releaseDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default MusicTable;