import React, { useState } from 'react';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [message, sendMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      sendMessage(inputValue);
    } 
    console.log(inputValue);
  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    sendMessage('');
    setEmail('');
  };
  return (
    <div>
      <h1>Contact Me</h1>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}
export default Contact;