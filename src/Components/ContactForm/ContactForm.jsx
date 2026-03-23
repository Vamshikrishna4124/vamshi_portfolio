import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

// ──────────────────────────────────────────────────────────────
// SECURITY FIX: Move credentials to environment variables.
// Create a .env file in the project root with:
//
//   VITE_EMAILJS_SERVICE_ID=service_za4df0a
//   VITE_EMAILJS_TEMPLATE_ID=template_lhxnx8p
//   VITE_EMAILJS_PUBLIC_KEY=2LBtyGzRPh5LHbV4h
//
// Then add .env to your .gitignore so keys aren't pushed to GitHub.
// ──────────────────────────────────────────────────────────────
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const InputField = ({ type = "text", name, placeholder, required }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    required={required}
    className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6c63ff]/50 focus:border-[#6c63ff]/50 transition-all"
  />
);

const ContactForm = () => {
  const form    = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          toast.success("Message sent! I'll get back to you soon 🎉");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send. Please try again ❌");
          console.error("EmailJS error:", error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-4 w-full"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField name="name"  placeholder="Your Name"  required />
        <InputField name="email" type="email" placeholder="Your Email" required />
      </div>

      <InputField name="title" placeholder="Subject" required />

      <textarea
        name="message"
        placeholder="Your message..."
        required
        rows={5}
        className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6c63ff]/50 focus:border-[#6c63ff]/50 transition-all resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3.5 rounded-xl text-white font-medium text-sm transition-all duration-200 ${
          loading
            ? "bg-gray-700 cursor-not-allowed"
            : "bg-[#6c63ff] hover:bg-[#5b52ee] hover:shadow-lg hover:shadow-[#6c63ff]/25"
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message →"
        )}
      </button>
    </form>
  );
};

export default ContactForm;