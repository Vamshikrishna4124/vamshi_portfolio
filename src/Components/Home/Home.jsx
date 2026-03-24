import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import profileImg from "../../assets/formal.jpg";

/* Reusable section heading */
const SectionHeading = ({ children }) => (
  <div className="mb-10">
    <div className="section-line" />
    <h2
      className="text-4xl md:text-5xl font-extrabold text-white"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      {children}
    </h2>
  </div>
);

/* Project card */
const ProjectCard = ({ title, description, tags = [] }) => (
  <div className="group relative bg-white/[0.03] border border-white/10 p-6 rounded-2xl hover:border-[#6c63ff]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6c63ff]/10">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6c63ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
      {title}
    </h3>
    <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
    {tags.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-2.5 py-0.5 bg-[#6c63ff]/10 text-[#a89cff] text-xs rounded-full border border-[#6c63ff]/20">
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
);

/* Experience card */
const ExpCard = ({ role, company, period, description }) => (
  <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#6c63ff] before:shadow-[0_0_8px_#6c63ff]">
    <div className="absolute left-[3.5px] top-4 bottom-0 w-px bg-gradient-to-b from-[#6c63ff]/40 to-transparent" />
    <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
      {role}
      <span className="text-[#6c63ff] ml-2 font-normal text-base">@ {company}</span>
    </h3>
    <p className="text-xs text-gray-500 mt-1 mb-3 font-mono">{period}</p>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const Home = () => {
  return (
    <main className="relative">
      {/* Background gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#6c63ff]/5 blur-[120px]" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-[#6c63ff]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          id="home"
          className="min-h-screen flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 py-20"
        >
          {/* Left */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-[#6c63ff] text-sm font-semibold tracking-widest uppercase mb-4 fade-up fade-up-delay-1">
              Software Developer & EEE Engineer
            </p>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 fade-up fade-up-delay-2"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Hi, I'm{" "}
              <span className="gradient-text block">
                Vamshi Krishna Gondru
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md mx-auto md:mx-0 fade-up fade-up-delay-3">
              I build scalable applications by integrating software with automation
              and real-time{" "}
              <span className="text-[#a89cff]">industrial systems</span> — bridging
              the gap between code and machines.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start fade-up fade-up-delay-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#6c63ff] hover:bg-[#5b52ee] text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#6c63ff]/30"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 font-medium rounded-xl transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 mt-12 justify-center md:justify-start fade-up fade-up-delay-4">
              {[
                { value: "2+", label: "Internships" },
                { value: "3+", label: "Projects" },
                { value: "2026", label: "Graduating" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — profile image */}
          <div className="md:w-1/2 flex justify-center fade-up fade-up-delay-2">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6c63ff]/30 to-transparent blur-2xl scale-105" />
              <img
                src={profileImg}
                alt="Vamshi Krishna"
                className="relative w-64 sm:w-80 md:w-96 rounded-3xl shadow-2xl object-cover border border-white/10"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#1a1a2e] border border-[#6c63ff]/30 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-xs text-gray-400">Available for</p>
                <p className="text-sm font-semibold text-[#a89cff]">Opportunities 🚀</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────────────── */}
        <section id="about" className="py-24 scroll-mt-24">
          <SectionHeading>About Me</SectionHeading>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm an <span className="text-white font-medium">Electrical & Electronics Engineering</span> student
              at GRIET, passionate about software development, automation, and IoT. I focus on building
              intelligent systems that combine backend development, real-time data processing,
              and industrial applications.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "⚡", label: "IIoT Systems" },
                { icon: "🐍", label: "Python / Django" },
                { icon: "⚛️",  label: "React / Node.js" },
                { icon: "🗄️", label: "SQL / Databases" },
                { icon: "📊", label: "Real-time Data" },
                { icon: "🤖", label: "ML / Analytics" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/8 rounded-xl text-sm text-gray-300"
                >
                  <span className="text-lg">{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ───────────────────────────────────────── */}
        <section id="experience" className="py-24 scroll-mt-24">
          <SectionHeading>Experience</SectionHeading>
          <div className="space-y-10">
            <ExpCard
              role="Python Full Stack Developer Intern"
              company="Soft Nexis"
              period="Feb 2026 – Apr 2026"
              description="Built web applications using Python, HTML, CSS, and SQL. Developed backend logic, optimized performance, and worked on real-world client projects throughout the internship."
            />
            <ExpCard
              role="Python Full Stack Trainee"
              company="Codegnan"
              period="Present"
              description="Learning full stack development with a focus on REST APIs, database integration, and scalable application design. Hands-on projects and mentored curriculum."
            />
          </div>
        </section>

        {/* ── PROJECTS ─────────────────────────────────────────── */}
        <section id="projects" className="py-24 scroll-mt-24">
          <SectionHeading>Projects</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="IIoT CNC Monitoring System"
              description="Developed an IIoT-enabled CNC system with real-time monitoring and predictive analytics. Streams live machine data to a web dashboard for remote visibility."
              tags={["Node.js", "Socket.io", "Chart.js", "IIoT"]}
            />
            <ProjectCard
              title="Real-Time Machine Dashboard"
              description="Built an interactive dashboard to visualize live machine data — temperature, vibration, and operational KPIs — using dynamic, auto-updating charts."
              tags={["React", "Chart.js", "WebSocket", "SQL"]}
            />
            <ProjectCard
              title="Python Full Stack Web App"
              description="Developed a full stack web application during internship with Django backend, REST APIs, and responsive frontend — deployed for real-world client use."
              tags={["Python", "Django", "HTML/CSS", "SQL"]}
            />
            <div className="flex items-center justify-center border border-dashed border-white/10 rounded-2xl p-6 text-center">
              <div>
                <p className="text-3xl mb-2">🛠️</p>
                <p className="text-gray-500 text-sm">More projects coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── EDUCATION ────────────────────────────────────────── */}
        <section id="education" className="py-24 scroll-mt-24">
          <SectionHeading>Education</SectionHeading>
          <div className="space-y-6">
            {[
              { degree: "B.Tech in Electrical & Electronics Engineering", school: "GRIET, Hyderabad", year: "2022 – 2026" },
              { degree: "Intermediate (MPC)", school: "Excel Junior College", year: "2020 – 2022" },
              { degree: "10th Grade", school: "Atomic Energy Central School", year: "2020" },
            ].map(({ degree, school, year }) => (
              <div
                key={degree}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white/[0.03] border border-white/8 rounded-2xl hover:border-[#6c63ff]/30 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{degree}</h3>
                  <p className="text-gray-400 text-sm mt-0.5">{school}</p>
                </div>
                <span className="mt-2 sm:mt-0 text-xs font-mono text-[#6c63ff] bg-[#6c63ff]/10 px-3 py-1 rounded-full self-start sm:self-center">
                  {year}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────── */}
        <section id="contact" className="py-24 scroll-mt-24 pb-32">
          <SectionHeading>Get in Touch</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm open to internships and full-time opportunities. Whether you
                have a question, a project idea, or just want to say hi — my
                inbox is always open.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "✉️", label: "Email", value: "vamshikrishnagondru@gmail.com", href: "mailto:vamshikrishnagondru@gmail.com" },
                  { icon: "💼", label: "LinkedIn", value: "vamshi-krishna-gondru", href: "https://www.linkedin.com/in/vamshi-krishna-gondru-1770692b4/" },
                  { icon: "🐙", label: "GitHub",   value: "Vamshikrishna4124", href: "https://github.com/Vamshikrishna4124" },
                ].map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/8 rounded-xl hover:border-[#6c63ff]/30 transition-colors group"
                  >
                    <span className="text-xl">{icon}</span>
                    <div>
                      <p className="text-xs text-gray-500">{label}</p>
                      <p className="text-sm text-gray-300 group-hover:text-[#a89cff] transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

      </div>
    </main>
  );
};

export default Home;