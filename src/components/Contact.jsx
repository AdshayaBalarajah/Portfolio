import React, { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Please fill in all fields.");
      return;
    }

    // Clear any previous error messages
    setFormError("");

    // EmailJS API call
    emailjs
      .send(
        "service_yi22tag",
        "template_ofsumsn",
        formData,
        "_0rw7eTO1Gl-iSVJr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true); // Set form submitted state
          // Reset form fields
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setFormError("Something went wrong. Please try again later."); // Handle error
        }
      );
  };

  return (
    <section id="contact">
      <div className="border-t border-stone-900 pb-20">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }} // Start hidden
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl font-bold"
        >
          Get in Touch
        </motion.h2>
        <div className="text-center tracking-tighter">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }} // Start hidden
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }} // Start hidden
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.phoneNo}
          </motion.p>
          <a href={`mailto:${CONTACT.email}`} className="border-b">
            {CONTACT.email}
          </a>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-10 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }} // Start hidden
          whileInView={{ opacity: 1, y: 0 }} // Animate when in view
          transition={{ duration: 0.5 }} // Transition duration
          exit={{ opacity: 0, y: 20 }} // Optional exit animation
        >
          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name" // Changed to "name" for consistent binding
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-stone-400 p-2 text-black bg-white" // Added text and background colors
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email" // Changed to "email" for consistent binding
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-stone-400 p-2 text-black bg-white" // Added text and background colors
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-left mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message" // Ensure the name matches
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-stone-400 p-2 text-black bg-white" // Added text and background colors
              rows="4"
              required
            ></textarea>
          </div>

          {formError && <p className="text-red-500 text-sm">{formError}</p>}
          {formSubmitted && (
            <p className="text-green-500 text-sm">
              Thank you for your message!
            </p>
          )}
          <button
            type="submit"
            className="bg-stone-900 text-white px-4 py-2 mt-4 rounded"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
