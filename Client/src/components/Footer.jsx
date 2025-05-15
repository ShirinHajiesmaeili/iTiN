import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm py-6 px-4 font-kodchasan">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/cookie-consent"
            className="hover:underline text-[#037c92] hover:text-[#f7941c] transition"
          >
            Cookie Policy
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:underline text-[#037c92] hover:text-[#f7941c] transition"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/shirinhajiesmaeili/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f7941c] transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/ShirinHajiesmaeili"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f7941c] transition"
          >
            <FaGithub size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 text-center sm:text-right">
          &copy; {new Date().getFullYear()} iTiN. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
