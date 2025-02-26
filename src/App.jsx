import { useState } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
