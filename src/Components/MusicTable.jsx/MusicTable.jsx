import React from "react";


function MusicTable({ music , onDelete}) {
    return (
      <table className="flex-item">
        <thead>
          <tr>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th></th>
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
              <td>
                <button onClick={() => onDelete(song.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default MusicTable;