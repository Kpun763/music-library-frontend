import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import axios from "axios";
import MusicTable from "./Components/MusicTable.jsx/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";

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
  const [activeIndex, setActiveIndex] = useState(-1);

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

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <MusicTable music={music} />
        <SearchBar onSearch={filterSongs} />
      </div>
    </div>
  );
}

export default App;
