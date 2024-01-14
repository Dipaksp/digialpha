import React from "react";
import Navbar from "./Navbar";
import Banner from "./Assets/Banner/Banner";
import "../Style/mainpage.css";
import content1 from "./Assets/contImages/contentImage.png";
import content2 from "./Assets/contImages/contentImage2.png";
import Button from "./Button";
import Footer from "./Footer";
import { backImage,card1,card2,card3 } from "./Assets/Images";
import Card from "./Card";

const Main = () => {
  const cardarr=[{img:card1,text:"Creating Streamlined Safeguarding Processes with OneRen"},
  {img:card2,text:"What are your safeguarding responsibilities and how can you manage them?"},
  {img:card3,text:"Revamping the Membership Model with Triathlon Australia"}
]
  return (
    <div >
      <Navbar />
      {/* style={{width:window.innerWidth}} */}
      <Banner />
      <div className="content" >
        <div className="divs">
          <img src={content1} alt="content" />
        </div>
        <div className="divs text">
          <p>The unseen of spending three years at Pixelgrade</p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
          <div className="btn">
            <Button text={"Learn More"} size={{ padding: "1rem 1.5rem" }} />
          </div>
        </div>
      </div>
      <div id='invert' className="content">
        <div className="divs text">
          <p>How to design your site footer like we did</p>
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
          <div className="btn">
            <Button text={"Learn More"} size={{ padding: "1rem 1.5rem" }} />
          </div>
        </div>
        <div className="divs1">
          <img src={content2} alt="content" />
        </div>
      </div>
      <div>
        <p>Caring is the new marketing</p>
        <div className="middleText">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </div>
      </div>
      <div className="cards">
        {cardarr.map((item,index)=>(
          <Card key={index} item={item}/>
        ))}
      </div>
      <div id="coverImage" style={{ backgroundImage: `url(${backImage})` }}>
        <h2> Pellentesque suscipit fringilla libero eu.</h2>
        <div>
          <Button text={"Get a Demo →"} size={{padding:"2% 3%"}} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
