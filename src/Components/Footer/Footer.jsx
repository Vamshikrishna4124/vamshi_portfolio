const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { label: "GitHub",   href: "https://github.com/Vamshikrishna4124",                              external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vamshi-krishna-gondru-1770692b4/",      external: true },
    { label: "Email",    href: "mailto:vamshikrishnagondru@gmail.com",                               external: false },
    { label: "Resume",   href: "/resume.pdf",                                                        external: false, download: true },
  ];

  const navLinks = [
    { href: "#about",      label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects",   label: "Projects" },
    { href: "#education",  label: "Education" },
    { href: "#contact",    label: "Contact" },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0f]">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#6c63ff]/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-1">
            <a
              href="#home"
              className="text-2xl font-extrabold text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              VK<span className="text-[#6c63ff]">.</span>
            </a>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Software Developer & EEE Engineer building scalable systems at
              the intersection of code and industry.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Connect</p>
            <ul className="space-y-2">
              {links.map(({ label, href, external, download }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    download={download || undefined}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {label} {external ? "↗" : download ? "↓" : ""}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {year} Vamshi Krishna Gondru. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Open to internships & full-time roles 🚀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;