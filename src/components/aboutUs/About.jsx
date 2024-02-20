import "./about.css";
import AboutPhoto from "../images/aboutPhoto.png";

function About() {
  return (
    <div className="container">
      <div className="about_photo-box">
        <img src={AboutPhoto} alt="" />
      </div>
      <div className="about_info">
        <h2 className="about_info-title">About us</h2>
        <p>
          Build nor highlights indicators way feltworks. Sorry back harvest
          reinvent illustration. Hiring diligence shift low view decisions race
          impact latest. Anomalies focus picture let long got.
        </p>
        <button className="about-btn">Let’s connect</button>
      </div>
    </div>
  );
}

export default About;
