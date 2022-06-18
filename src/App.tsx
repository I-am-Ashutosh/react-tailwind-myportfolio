import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles";
import Sidebar from "./components/Sidebar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Home from "./pages/home";

function App() {
  return (
    <div className="flex font-[Poppins]">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: "#0b111e",
          },
          particles: {
            move: {
              direction: "top",
              enable: true,
              random: false,
              straight: false,
              bounce: true,
              // gravity: {
              //   acceleration: 10,
              //   enable: true,
              //   inverse: true,
              //   maxSpeed: 2,
              // },
              // spin: {
              //   acceleration: 3,
              //   enable: false,
              //   position: {x:52,y:25},
              // },
            },
            opacity: {
              value: { min: 0.1, max: 0.5 },
            },
            size: {
              value: { min: 1, max: 10 },
            },
          },
        }}
      />
      <div className="fixed hidden md:block sm:w-1/6">
        <Sidebar />
      </div>
      <div className="absolute snap-y scroll-smooth w-full md:w-5/6 right-0">
        <Home />
        <About />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
