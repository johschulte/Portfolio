import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import VANLIFE from "../assets/VANLIFE.png";
import HackerNews from "../assets/Hackernews.png";
import done from "../assets/done.png";

const Work = () => {
  const [iconSize, setIconSize] = useState(3);

  const handleClick = () => {
    setIconSize((prevSize) => (prevSize === 3 ? 4 : 3));
  };

  return (
    <section className="work" id="work">
      <div className="row">
        <h2>My Work</h2>
        <div className="work__boxes">
          <div className="work__box">
            <div className="work__text">
              <h3>#VANLIFE</h3>
              <p>React-SPA for Van rental</p>
              <ul className="work__list">
                <li>HTML</li>
                <li>CSS Tailwind</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>

              <div className="work__links">
                <a
                  href="https://flourishing-lily-58498b.netlify.app"
                  target="_blank"
                  className="link__text"
                >
                  Visit Site <span>&rarr;</span>
                </a>
                <a
                  href="https://github.com/johschulte/VanRental"
                  title="View Source Code"
                  target="_blank"
                >
                  <FaGithub size="3rem" className="work__code" />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <a
                href="https://flourishing-lily-58498b.netlify.app"
                target="_blank"
              >
                <img src={VANLIFE} className="work__image" alt="Project 1" />
              </a>
            </div>
          </div>

          <div className="work__box">
            <div className="work__text">
              <h3>Hacker News</h3>
              <p>Responsive designed News App for Information around the web</p>
              <ul className="work__list">
                <li>React</li>
                <li>CSS Tailwind</li>
                <li>HTML</li>
                <li>Restful API</li>
              </ul>

              <div className="work__links">
                <a
                  href="https://spiffy-biscuit-ff6283.netlify.app/"
                  target="_blank"
                  className="link__text"
                >
                  Visit Site <span>&rarr;</span>
                </a>
                <a
                  href="https://github.com/Bepixeled/HackerNews"
                  target="_blank"
                  onClick={handleClick}
                >
                  <FaGithub size={`${iconSize}rem`} className="work__code" />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <a
                href="https://spiffy-biscuit-ff6283.netlify.app/"
                target="_blank"
              >
                <img src={HackerNews} className="work__image" alt="Project 1" />
              </a>
            </div>
          </div>

          <div className="work__box">
            <div className="work__text">
              <h3>done</h3>
              <p>To Do App written in React</p>
              <ul className="work__list">
                <li>React</li>
                <li>LocalStorage</li>
                <li>CSS</li>
              </ul>

              <div className="work__links">
                <a
                  href="https://charming-daffodil-f193bf.netlify.app/"
                  target="_blank"
                  className="link__text"
                >
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/KenKindermann/ReactToDoApp/tree/JohnsReactVersion">
                  <FaGithub size="3rem" className="work__code" />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <a
                href="https://charming-daffodil-f193bf.netlify.app/"
                target="_blank"
              >
                <img src={done} className="work__image" alt="Project 3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
