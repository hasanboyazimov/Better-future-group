import "./header.css";
import headerImg from "../images/headerImg.png"
import Modal from "../modal/Modal";


function Header() {
  return (
    <div className="container">
      <div className="headerInfo">
        <div>
        <h1 className="headerInfoTitle">
          Launching startups to <span className="textBlue">solve</span> global <span className="textBlue">problems</span>
        </h1>
        <p className="headerInfoText">
          We help to ignite global change with our accelerator program designed
          to supercharge the growth of startups.
        </p>
        </div>
        <div>
          <Modal/>
          
        </div>
      </div>
      <div className="headerImgBox">
        <img className="headerImg" src={headerImg} alt="" />
      </div>
    </div>
  );
}

export default Header;
