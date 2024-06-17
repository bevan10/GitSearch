import { useEffect, useState } from "react";
import "./App.css";
import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <div className="m-0 p-0 h-full w-full">
        <Nav setUser={setUser} />
        <Hero user={user} />
      </div>
    </>
  );
}

export default App;
