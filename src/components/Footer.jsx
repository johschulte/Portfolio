import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer role="contentinfo" className="footer">
      <div className="row">
        <ul className="footer__social-links">
          <li className="footer__social-link-item">
            <a
              href="https://github.com/johschulte/"
              title="Link to Github Profile"
            >
              <FaGithub size="3rem" />
            </a>
          </li>
          <li className="footer__social-link-item">
            <a
              href="https://www.linkedin.com/in/johannes-schulte-32a492268"
              title="Link to LinkedIn Profile"
            >
              <FaLinkedin size="3rem" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
