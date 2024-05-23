import { useState } from "react";
import emailjs from "emailjs-com";

import '@fortawesome/fontawesome-free/css/all.min.css';

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    // Replace below with your own Service ID, Template ID, and Public Key from your EmailJS account
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-blue-700 to-cyan-500 min-h-screen flex justify-center items-center w-full">
      <div className="flex justify-center items-center w-full">
        <div className="w-3/4 px-10 text-white">
          <h2 className="text-4xl font-bold mb-4 text-left">GET IN TOUCH</h2>
          <div className="border-b-2 border-white mb-6 mt-0 w-16"></div>
          <form name="sentMessage" onSubmit={handleSubmit}>
            <div className="flex mb-4 space-x-2">
              <div className="w-1/2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-white rounded-md bg-transparent text-white focus:outline-none focus:border-blue-300"
                  placeholder="Name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-white rounded-md bg-transparent text-white focus:outline-none focus:border-blue-300"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                id="message"
                className="w-full px-3 py-2 border border-white rounded-md bg-transparent text-white focus:outline-none focus:border-blue-300"
                rows="4"
                placeholder="Message"
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="text-left">
              <button type="submit" className="px-4 py-2 bg-white text-black rounded-xl hover:bg-blue-200 focus:outline-none">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/4 px-10 text-white text-left">
          <div className="mb-6">
            <h3 className="text-xl font-bold pb-3">Contact Info</h3>
            <p>
              <i className="fas fa-map-marker-alt text-pretty"></i> Address
              <br />
              123 Main St, City, Country
            </p>
          </div>
          <div className="mb-6">
            <p>
              <i className="fas fa-phone"></i> Phone
              <br />
              +1234567890
            </p>
          </div>
          <div className="mb-6">
            <p>
              <i className="fas fa-envelope"></i> Email
              <br />
              example@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;