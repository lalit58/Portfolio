import "./FormStyles.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rs45t4o",
        "template_9xzfews",
        form.current,
        "H4yh-NUmtXUkNoM-U"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Message Sent Successfull");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name"></input>
        <label>Email</label>
        <input type="email" name="user_email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" name="message" placeholder="Type Your Message" />
        {/* <input type="submit">Submit</input> */}

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
