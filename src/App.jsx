import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits.jsx";
import Button from "./components/Button.jsx";
import Collaboration from "./components/Collaboration.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.7rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
