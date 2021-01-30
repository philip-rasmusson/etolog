import Navbar from "./components/navbar/Navbar";
import HomeView from "./views/HomeView/HomeView";
import Konsultuppdrag from "./views/KonsultuppdragView/KonsultuppdragView";
import Forelasningar from "./views/ForelasningarView/ForelasningarView";
import Radgivning from "./views/RadgivningView/RadgivningView";
import VaraEtologer from "./views/VaraEtologerView/VaraEtologerView";
import Webkurser from "./views/WebkurserView/WebkurserView";
import Footer from "./components/Footer/Footer";
import SocialMedia from "./components/socialmedia/SocialMedia";
import "./global/Global.css";

function App() {
  return (
    <div className="App">
      <Navbar
        navLinkOne="rådddgivning"
        navLinkTwo="webkurser"
        navLinkThree="föreläsningar"
        navLinkFour="konsultuppdrag"
        navLinkFive="våra etologer"
        slogan="KUNSKAP, KÄRLEK, KOMMUNIKATION – För alla djur"
      />
      <SocialMedia />
      <HomeView />
      <Footer />
    </div>
  );
}
export default App;
