import { Route, Routes } from "react-router";

import Navbar from "./components/nav/Navbar";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Details from "./pages/details";

function App() {
  return (
    <>
      <div className="m-h-screen p-6 bg-white text-grey-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/favorites" element={<Favorites />} />

          <Route path="/recipe-item/:id" element={<Details />} />
          <Route path="/favorites/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
