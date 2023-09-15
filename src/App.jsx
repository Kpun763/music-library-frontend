import "./App.css";
import Header from "./Components/Header/Header";
import axios from "axios";


function App() {

  const fetchMusic = async () => {
    const response = await axios.get("https://localhost:7073/api/MusicLibrary")
    console.log(response)
  }

  return (
    <div className="App">
      <Header />
      <button onClick={fetchMusic}>Add Music</button>
    </div>
  );
}

export default App;
