import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="contact">
      <form
        name="contact"
        method="POST"
        className="contact_form"
        data-netlify="true"
        onSubmit="submit"
      >
        <label for="name">Nom: </label>
        <input type="text" name="name" />

        <label for="email">Email: </label>
        <input type="email" name="email" />

        <label for="nmessage">Message:</label>
        <textarea name="message"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
