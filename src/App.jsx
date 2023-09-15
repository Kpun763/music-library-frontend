import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import axios from "axios";
import MusicTable from "./Components/MusicTable.jsx/MusicTable";

function App() {
  const [music, setMusic] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const fetchMusic = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7073/api/MusicLibrary"
      );
      console.log(response);
      setMusic(response.data)
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
      <MusicTable music={music}/>
    </div>
  );
}

export default App;
