import React, { useState } from "react";
import playVideoIcon from "../icons/playVideo.svg";
import Video from "../videos/video.mp4";
import "./modal.css";

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="container-modal">
      
      <button onClick={toggleModal} className="playVideoButton btn-modal">
        {" "}
        <img src={playVideoIcon} alt="" /> Play showreel
      </button>
      <a className="learnMore" href="#">Learn more</a>

      {modal && (
        <div className="modal-box">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <video src={Video} controls autoPlay></video>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
