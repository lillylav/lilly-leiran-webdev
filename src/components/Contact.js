import React, { useState } from 'react';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, sendMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
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
    <section id="contact" className="columns ml-3 mr-3 mt-5 pb-5 is-centered light-background">
      <div className="column is-half box pink-background dark-font">
        <h2 className="subtitle is-3 has-text-centered dark-font mt-4">
          Contact Me
        </h2>
        <div className="columns is-centered">
          <form className="form column is-three-quarters">
            <input
            value={name} 
            name="name"
            onChange={handleInputChange} 
            type="name" 
            placeholder="NAME" 
            className="input mb-1 koulen" 
            />
            <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="YOUREMAIL@WEBSITE.COM" 
            className="input mb-1 koulen"
            />
            <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="MESSAGE" 
            className="input mb-1 koulen"
            />
            <button type="button" onClick={handleFormSubmit} className="button dark-background white-font mb-3 koulen">
            SUBMIT
            </button>

            <div className="columns is-centered">
              <div className="column">
                <h3 className="is-size-4 has-text-centered dark-font mt-4 mb-3">Find Me</h3>
                <div class="mb-1 has-text-centered">
                  <a href="mailto:lilly.leiran@gmail.com" className="dark-font link">
                    lilly.leiran@gmail.com
                  </a>
                  <br />
                  <a href="https://github.com/lillylav" target="_blank" className="dark-font link">
                    <img src="https://img.icons8.com/carbon-copy/50/000000/github.png"/>
                  </a>
                  <a href="linkedin.com" target="_blank" className="dark-font link">
                    LinkedIn Icon
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;