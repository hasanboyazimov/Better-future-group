import React from "react";
import "./footer.css";
import Logo from "../icons/logo.svg";
function FooterBox() {
  return (
    <div className="footer_blog">
      <div className="container">
      <div class="rown">
        <div className="footer-intro">
          <img src={Logo} alt="" />
          <p>Build nor highlights indicators way feltworks.</p>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Our products</a>
          </li>
          <li>
            <a href="#">Our mission</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
        

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57063.99786527015!2d69.20559230807042!3d41.34204827802196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b40d847941d%3A0x5765a18b352df71e!2sTashkent%20City%20Park!5e0!3m2!1sru!2s!4v1700805858720!5m2!1sru!2s"
            width="483"
            height="304"
            
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div>
          <p>© BetterFutureGroup 2023</p>
        </div>
    </div>
    </div>
  );
}

export default FooterBox;
