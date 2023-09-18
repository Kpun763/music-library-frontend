import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import axios from "axios";
import MusicTable from "./Components/MusicTable.jsx/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";
import NewMusicForm from "./Components/NewMusicForm/NewMusicForm";

function App() {
  const filterSongs = (term) => {
    const filteredMusic = music.filter((song) => {
      return (
        song.title.toLowerCase().includes(term.toLowerCase()) ||
        song.album.toLowerCase().includes(term.toLowerCase()) ||
        song.artist.toLowerCase().includes(term.toLowerCase()) ||
        song.genre.toLowerCase().includes(term.toLowerCase()) ||
        song.releaseDate.toLowerCase().includes(term.toLowerCase())
      );
    });

    setMusic(filteredMusic);
  };

  const [music, setMusic] = useState([]);

  const fetchMusic = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7073/api/MusicLibrary"
      );
      console.log(response);
      setMusic(response.data);
    } catch (error) {
      console.warn("Error in fetchMusic request: ", error);
    }
  };

  useEffect(() => {
    fetchMusic();
  }, []);

  const handleDelete = async (songId) => {
    try {
      await axios.delete(`https://localhost:7073/api/MusicLibrary/${songId}`);
      console.log("Song deleted:", songId);

      setMusic((prevMusic) => prevMusic.filter((song) => song.id !== songId));
    } catch (error) {
      console.error("Error deleting song:", error);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <MusicTable music={music} onDelete={handleDelete} />
        <SearchBar onSearch={filterSongs} />
        <NewMusicForm />
      </div>
    </div>
  );
}

export default App;
