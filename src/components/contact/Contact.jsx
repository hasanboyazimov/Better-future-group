import "./contact.css";
import QRcode from "../icons/QRCode.svg"

function Contact() {
  return (
    <div className="container contact_blog">
      <div className="contact_info">
        <h1>Contact us</h1>
        <p>
          Request a call back and our operators will call you in 30 minutes!
        </p>
        <form className="form" action="">
        <h4 className="input_name">Your name</h4>
        <input className="form_input" type="text" />
        <h4 className="input_name">Your phone number</h4>
        <input className="form_input" type="tel" />
        <button className="contact_btn" type="submit">
        Request call back
        </button>
        </form>
      </div>
      <div className="qr_box">
          <img src={QRcode} alt="" />
          <p>Scan this QR code to chat with our operator in telegram.</p>
      </div>
    </div>
  );
}

export default Contact;
