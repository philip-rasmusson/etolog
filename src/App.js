import HomeView from "./views/HomeView";
import Navbar from "./components/navbar/Navbar";
import SocialMedia from "./components/socialmedia/SocialMedia";
import "./global/Global.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialMedia />
      <HomeView />
    </div>
  );
}

export default App;
