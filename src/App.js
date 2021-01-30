import HomeView from "./views/HomeView/HomeView";
import Konsultuppdrag from "./views/KonsultuppdragView/KonsultuppdragView";
import Forelasningar from "./views/ForelasningarView/ForelasningarView";
import Radgivning from "./views/RadgivningView/RadgivningView";
import VaraEtologer from "./views/VaraEtologerView/VaraEtologerView";
import Webkurser from "./views/WebkurserView/WebkurserView";
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
