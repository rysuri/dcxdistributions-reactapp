import "./css/App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Partners from "./pages/Partners";
import FAQ from "./pages/FAQ";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
