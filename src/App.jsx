import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Whishlists from "./pages/Whishlist";
import Category from "./pages/Category";
import Productpage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <main className="main-page">
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Whishlist" element={<Whishlists />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Productpage" element={<Productpage />} />
        </Routes>

        <div>
          <Footer />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
