import React from "react";
import portaitabout from "../assets/portraitaboutzent.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="row">
        <h2>About Me</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              I'm a web developer based in Bielefeld, Germany. I have a passion
              for creating applications that address real-world problems and
              provide a delightful user experience. My expertise lies in React
              JS, Tailwind CSS, and Restful APIs.
            </p>
            <p>
              I hold a diploma in Protestant theology and worked as a Protestant
              pastor for several years before making the transition to software
              development. My experience as a pastor has equipped me with
              effective communication skills that promote teamwork and empower
              others to thrive.
            </p>
            {/* <!-- Insert a link to resume --> */}
            <a
              href="https://www.linkedin.com/in/johannes-schulte-32a492268/details/certifications/"
              target="_blank"
              className="btn"
            >
              My Resume
            </a>
          </div>

          <div className="about__photo-container">
            <img
              className="about__photo"
              style={{ width: "40rem" }}
              src={portaitabout}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
