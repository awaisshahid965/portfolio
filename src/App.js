import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <section className="text-gray-300  grid">
        <Home />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Contact />
      </section>
    </>
  );
}

export default App;
