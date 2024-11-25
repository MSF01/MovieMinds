import "./App.css";
import { NavBar } from "./components/NavBar.jsx";
import Favorite from "./Pages/Favorites.jsx";
import { Home } from "./Pages/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
