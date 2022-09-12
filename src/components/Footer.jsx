import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <p className="questions">Questions? Contact us.</p>
      <div className="footer_wrapper">
        <div className="footer1">
          <p>FAQ</p>
          <p>Investo Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>
        <div className="footer2">
          <p> Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Legal Notices</p>
        </div>
        <div className="footer3">
          {" "}
          <p>Account </p>
          <p> Ways to Watch</p> <p>Corporate Information</p>{" "}
          <p>Only on Netflix</p>
        </div>
        <div className="footer4">
          <p>Media Center </p>
          <p>Terms of Use</p>

          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
