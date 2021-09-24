import { useEffect } from "react";
import AOS from "aos";
import Hero from "./components/Hero";
import Description from "./components/Description";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Hero />
      <Description />
    </div>
  );
}

export default App;
