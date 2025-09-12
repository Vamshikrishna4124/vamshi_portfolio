import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_za4df0a",   // Replace with your EmailJS Service ID
        "template_lhxnx8p",  // Replace with your Contact Us template ID
        form.current,
        "2LBtyGzRPh5LHbV4h"    // Replace with your Public Key
      )
      .then(
        () => {
          toast.success("Message sent! 🎉 Check your inbox for auto-reply.");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send ❌. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-3 max-w-md"   // 👈 keeps form width limited
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-2 h-9 rounded bg-white border border-gray-300 text-black text-sm"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-2 h-9 rounded bg-white border border-gray-300 text-black text-sm"
      />
      <input
        type="text"
        name="title"
        placeholder="Subject"
        required
        className="w-full p-2 h-9 rounded bg-white border border-gray-300 text-black text-sm"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="w-full p-2 h-24 rounded bg-white border border-gray-300 text-black text-sm"
      ></textarea>
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
