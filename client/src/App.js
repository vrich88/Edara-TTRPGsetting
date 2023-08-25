import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// direct components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// complete pages

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/*  */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
