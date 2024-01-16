import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Transition } from "react-transition-group";

const BackToTop = ({ isBackToTopRendered }) => {
  return (
    <Transition in={isBackToTopRendered} timeout={10}>
      {(state) => (
        <div
          style={{
            transition: "opacity 0.4s ease-in-out",
            opacity: state === "entered" ? 1 : 0,
          }}
        >
          <a href="#top" className={`back-to-top `} title="Back to Top">
            <FaArrowUp
              className="back-to-top__image"
              color="white"
              size="3rem"
            />
          </a>
        </div>
      )}
    </Transition>
  );
};

export default BackToTop;
