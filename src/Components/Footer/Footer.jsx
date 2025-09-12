const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <p className="text-lg font-semibold text-white">
          Made with 💻, ☕, and a lot of{" "}
          <span className="text-indigo-400">passion</span>
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Vamshikrishna4124"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vamshi-krishna-gondru-1770692b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:vamshikrishnagondru@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Vamshi Krishna Gondru.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
