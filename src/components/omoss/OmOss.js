import React from "react";
import ContentBox from "../Container/contentBox/ContentBox";
import "./OmOss.css";
import omoss from "../../global/images/omoss.png";

const OmOss = () => {
  const style = {
    fontSize: "smaller",
  };

  return (
    <div className="body">
      <ContentBox>
        <div>
          <h1>OM OSS</h1>
          <br />
          <span style={style}>
            <p>
              Etolog.se lanserades den 1 oktober 2018 och drivs genom företaget
              Yoma Consulting AB, ett konsultbolag verksamma inom
              veterinärbranschen. Idén bakom konceptet var att samla etologer
              för att djurägare och företag lättare skulle hitta rätt när man
              behöver hjälp med sitt djur eller stöd i sin verksamhet.
            </p>
            <br />
            <p>
              Vi vill att fler ska förstå vad en etolog gör och när man kan ta
              hjälp av en etolog.För både verksamheter och enskilda djurägare
              blir vår plattform en rikstäckande mötesplats som underlättar
              kontakten med yrkesverksamma etologer. Idag har vi etologer från
              Malmö i söder till Sundsvall i norr! Vi erbjuder etologkonsulter
              för olika verksamheter inom djursektorn, anordnar onlinekurser,
              konsulterar djurägare och föreläser om djursbeteenden.
            </p>
          </span>
        </div>
      </ContentBox>
      <ContentBox>
        <div className="lorem">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
            explicabo placeat quidem itaque nostrum, earum eum modi impedit!
            Laboriosam perspiciatis dicta odio itaque et. Doloribus in porro
            veniam itaque dolorem!
          </p>
          <img src={omoss} className="imgOmoss" />
        </div>
      </ContentBox>
    </div>
  );
};
export default OmOss;
