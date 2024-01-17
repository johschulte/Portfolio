import Header from "./components/Header";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import BackToTop from "./components/BackToTop";
import { useFavicon } from "@uidotdev/usehooks";

function App() {
  const [isBackToTopRendered, setIsBackToTopRendered] = useState(false);
  const [favicon, setFavicon] = React.useState("./assets/favicon.io");

  const checkScroll = () => {
    if (window.scrollY > 700) {
      setIsBackToTopRendered(true);
    } else {
      setIsBackToTopRendered(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", checkScroll);

    return () => {
      document.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main role="main">
        <Work />
        <About />
      </main>
      <Contact />
      <Footer />

      <BackToTop isBackToTopRendered={isBackToTopRendered} />
    </>
  );
}

export default App;
