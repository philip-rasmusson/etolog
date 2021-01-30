import React from "react";
import "./Container.css";
import ContentBox from "./contentBox/ContentBox";
import cat from "../../global/images/cat.jpg";
import djuragare from "../../global/images/djuragare.png";
import kliniker from "../../global/images/kliniker.png";
import verksamheter from "../../global/images/IMG_6992.png";
import forelasningar from "../../global/images/forelasningar.jpg";
import webkurser from "../../global/images/webkurser3.jpg";

const Container = (props) => {
  const style = {
    fontFamily: "Helvetica, Arial, sans-serif",
    color: "#666",
    padding: "2rem",
  };

  if (props.sectionStyle === "blue") {
    // style.backgroundColor = "rgb(78, 106, 132)";
    style.backgroundColor = "#666666";
    style.color = "white";

    return (
      <div style={style} className="content">
        <ContentBox>
          <img src={cat} className="imgSmall" />
          <h2 className="boxHeadline">Webkurser</h2>
          <br />
          <p>
            Vill du och ditt djur lära er något nytt tillsammans? Behöver du en
            rolig present att ge bort? Det kommer att komma fler och fler
            webkurser framöver så håll utkik!
          </p>
        </ContentBox>
        <ContentBox>
          <img src={forelasningar} className="imgSmall" />
          <h2 className="boxHeadline">Föreläsningar</h2>
          <br />
          <p>
            Vi skräddarsyr föreläsningen för dig! Alla våra föreläsare är
            utbildade etologer med god kompetens i sitt ämne. Vad vill du veta
            mer om? Hur lång föreläsning vill du ha? En serie på fler
            tillfällen? Workshop?
            <br />
            <br />
            Maila oss dina önskemål så tar vi fram ett koncept som fungerar för
            dig och din verksamhet. Vi erbjuder föreläsningar och kurser i
            djurhållning, djurhälsa, etologi, djurskydd och det mesta annat som
            rör djur
            <br />
            <br />
            <span className="hidden">
              Exempel på föreläsningar:
              <br />
              <br />
              Vad katten vill katten? Etolog Ulrica Ahlrot Hundens behov,
              problembeteenden och inlärning. Etolog Jannike Kindsjö Hästen
              etologi, inlärning och välfärd. Etolog Ellen Kilander Hästens
              kognition och beteende. Etolog Emelie De Boussard Kaninvälfärd och
              berikning. Etolog Emma Almqvist
              <br />
              <br />
              För priser och upplägg, kontakta oss, vi är anpassningsbara!
              Kontaktuppgifter.
              <br />
              <br />
              Vi har bland annat föreläst på Nordens största hundevenemang; My
              Dog (2019, 2 020), Utemässan i Lappland (2019), RAID-kongressen
              (2019) och ZOORF-expo (2019).
            </span>
          </p>
        </ContentBox>
        <ContentBox>
          <img src={webkurser} className="imgSmall" />
          <h2 className="boxHeadline">Konsultuppdrag</h2>
          <br />
          <p>
            Vad kan vi hjälpa din verksamhet med? Vi erbjuder etologer för
            längre och kortare uppdrag. Vi kan erbjuda din verksamhet engagerade
            och sakkunniga konsulter. Våra etologer har nära samarbete med
            veterinär. Våra etologer har verkat som yrkeslärare på
            naturbruksgymnasium, organiserat barnkurser och teorilektioner på
            mindre djurverksamheter, skrivit texter åt försäkringsbolag, hörts i
            radio som husdjursexperter och gett expertutlåtanden i olika
            djurtidningar.
          </p>
        </ContentBox>
      </div>
    );
  } else {
    return (
      <div style={style} className="content">
        <ContentBox>
          <img src={djuragare} className="imgSmall" />
          <h2 className="boxHeadline">Djurägare</h2>
          <br />
          <p>
            Vi kan hjälpa dig med ditt husdjur!
            <br />
            <br />
            Oavsett om du behöver hjälp med vardagsträning, beteendeproblematik
            eller förebyggande träning.
            <br />
            <br />
            Boka en konsultation
          </p>
        </ContentBox>
        <ContentBox>
          <img src={kliniker} className="imgSmall" />
          <h2 className="boxHeadline">Kliniker</h2>
          <br />
          <p>
            För ett trovärdigt holistiskt perspektiv bör också
            beteenderådgivning vara lika evidensbaserad och kvalitativ som
            veterinärmedicinen. Erbjud professionell beteende-rådgivning på din
            klinik.
            <br />
            <br />
            Boka en konsultation
          </p>
        </ContentBox>
        <ContentBox>
          <img src={verksamheter} className="imgSmall" />
          <h2 className="boxHeadline">Verksamheter</h2>
          <br />
          <p>
            Våra etologer är utbildade i djurhållning, djurhälsa och smittskydd.
            Vi har också kompetens inom djurskydd, försöksdesign och
            avelsarbete. Vi kan erbjuda din verksamhet engagerade och sakkunniga
            konsulter. Våra etologer har nära samarbete med veterinär.
            <br />
            <br />
            Boka en konsultation
          </p>
        </ContentBox>
      </div>
    );
  }
};

export default Container;

// <div className="content-left">
// <h1>This is section {props.section}.</h1>
// <p>{props.children}</p>
// </div>
// <div className="content-middle">
// <h1>This is section {props.section}.</h1>
// <img className="img-small" src={cat}></img>
// </div>
// <div className="content-right">
// <h1>This is section {props.section}.</h1>
// <p>{props.children}</p>
// </div>
