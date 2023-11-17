import { NavBar, MovingHero, Parallax, Services, Portfolio, Contact } from "./components";


function App() {

  return (
    <div>
      <section id="navbar">
        <NavBar />
        <MovingHero />
      </section>
      <section id="services">
        <Parallax type="services" />
      </section>
      <section><Services /></section>
      <section id="portfolio">
        <Parallax type="portfolio" />
      </section>


      <Portfolio />


      <section>
        <Contact />
      </section>
    </div>
  );
}

export default App;
