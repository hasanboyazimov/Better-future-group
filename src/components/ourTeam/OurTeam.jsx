import "./ourTeam.css";
import Avatar1 from "../images/teamPhoto/Avatar1.png"
import Avatar2 from "../images/teamPhoto/Avatar2.png"
import Avatar3 from "../images/teamPhoto/Avatar3.png"
import Avatar4 from "../images/teamPhoto/Avatar4.png"
import Avatar5 from "../images/teamPhoto/Avatar5.png"
import Avatar6 from "../images/teamPhoto/Avatar6.png"
import Avatar7 from "../images/teamPhoto/Avatar7.png"
import Avatar8 from "../images/teamPhoto/Avatar8.png"

function Team() {
  return (
    <div className="container">
      <div className="team_blog">
        <div className="about_team">
          <h1>Meet our team</h1>
          <p>
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do your best work.
          </p>
        </div>
        <div className="team_photos">
          <div className="photo_box">
            <img src={Avatar1} alt="" />
            <h4>Amélie Laurent</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="photo_box">
            <img src={Avatar2} alt="" />
            <h4>Amélie Laurent</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="photo_box">
            <img src={Avatar3} alt="" />
            <h4>Amélie Laurent</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="photo_box">
            <img src={Avatar4} alt="" />
            <h4>Amélie Laurent</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="photo_box">
            <img src={Avatar5} alt="" />
            <h4>Amélie Laurent</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="photo_box">
            <img src={Avatar6} alt="" />
            <h4>Amélie Laurent</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="photo_box">
            <img src={Avatar7} alt="" />
            <h4>Amélie Laurent</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="photo_box">
            <img src={Avatar8} alt="" />
            <h4>Amélie Laurent</h4>
            <p>Founder & CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
