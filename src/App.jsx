import { NavBar, MovingHero, Parallax, Services, Portfolio } from "./components";


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
      <section>
        <Portfolio />
      </section>
      <section></section>
    </div>
  );
}

export default App;
