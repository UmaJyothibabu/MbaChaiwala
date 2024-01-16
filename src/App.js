import IntroVideo from "./Componenets/IntroVideo";
import freshTopicimg from "./Assets/academy.png";
import freshTopic2img from "./Assets/story.png";
import tedTalksImg from "./Assets/in-the-news.gif";
import franchiseImg from "./Assets/franchise.gif";
import mapImg from "./Assets/locations.png";
import coursesImg from "./Assets/image2.png";
import albumImg from "./Assets/mba-cares.gif";
import baratImg from "./Assets/image1.png";
import chaiwalaImg from "./Assets/image3.png";

import Section from "./Componenets/Section";
import "./Styles/App.scss";
import "./Styles/intro.scss";
import "./Styles/section.scss";
import "./Styles/footer.scss";
import "./Styles/misc.scss";

import "./Styles/mediaQuery.scss";

import data from "./Data/data.json";
import Footer from "./Componenets/Footer";
import Misc from "./Componenets/Misc";
import { useEffect } from "react";

const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f";

function App() {
  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    courses,
    album,
    barat,
    chaiwala,
  } = data;

  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;

    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    } else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);
    return () => {
      window.removeEventListener("mousemove", dotCursor);
    };
  }, []);

  return (
    <>
      <IntroVideo />
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btnTxt={freshTopic.btn}
        imgsrc={freshTopicimg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnTxt={freshTopic2.btn}
        imgsrc={freshTopic2img}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        btnTxt={tedTalks.btn}
        imgsrc={tedTalksImg}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />
      <Section
        h3={franchise.heading}
        text={franchise.text}
        btnTxt={franchise.btn}
        imgsrc={franchiseImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      <Section
        h3={map.heading}
        text={map.text}
        imgsrc={mapImg}
        hasbtn={false}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
      />
      <Section
        h3={courses.heading}
        text={courses.text}
        btnTxt={courses.btn}
        imgsrc={coursesImg}
        imgSize={"30%"}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />
      <Section
        h3={album.heading}
        text={album.text}
        btnTxt={album.btn}
        imgsrc={albumImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      <Section
        h3={barat.heading}
        text={barat.text}
        btnTxt={barat.btn}
        imgsrc={baratImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        btnTxt={chaiwala.btn}
        imgsrc={chaiwalaImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      <Footer />
      <Misc />
    </>
  );
}
export default App;
