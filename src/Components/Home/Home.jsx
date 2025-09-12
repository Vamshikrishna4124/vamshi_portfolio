import React from "react";
import ContactForm from "../ContactForm/ContactForm"; // Correct import path

const Home = () => {
  return (
    <main className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-32">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col-reverse md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
              Hi, I'm <span className="text-indigo-500">Vamshi Krishna Gondru</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              A Java Full Stack Developer crafting web applications using{" "}
              <span className="text-indigo-400 font-semibold">Spring Boot</span>{" "}
              and <span className="text-indigo-400 font-semibold">React</span>. Explore my work to see how I bring ideas to life with efficient backend and interactive frontend solutions.
            </p>
            <a
              href="#about"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition"
            >
              Know More
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/formal.jpg"
              alt="Vamshi Krishna Gondru"
              className="rounded-2xl shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg object-cover"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a passionate Java Full Stack Developer with hands-on experience in building complete web applications. I specialize in backend development using Spring Boot and frontend development using React. I enjoy solving real-world problems and building user interfaces that enhance digital experiences.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <ul className="space-y-6 text-gray-300">
            <li>
              {/* Add your experience here */}
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400">Coming soon...</p>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <ul className="space-y-6 text-gray-300">
            <li>
              <h3 className="text-2xl font-semibold text-white">
                B.Tech in Electronics and Electronics Engineering – Gokaraju Rangaraju Institute of Engineering and Technology
              </h3>
              <p className="text-sm text-indigo-400">2022 – 2026</p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold text-white">
                Class 12th – Excel.jr College - Hyderabad
              </h3>
              <p className="text-sm text-indigo-400">2020 – 2022</p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold text-white">
                Class 10th – CBSE Board, Atomic Energy Central School, Manuguru
              </h3>
              <p className="text-sm text-indigo-400">2011 – 2020</p>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-4 text-white">Contact Me</h2>
          <p className="text-lg text-gray-300 mb-6">
            Have a project in mind or want to collaborate? Drop me a message!
          </p>

          <ContactForm /> {/* Render the ContactForm component here */}
        </section>
      </div>
    </main>
  );
};

export default Home;
