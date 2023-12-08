import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from './Component/Banner/Banner';
import Home from './Component/Home/Home';
import BannerImage from './Component/Banner/BannerImage';
import DisplayBollyDetails from './Component/Bollywood/DisplayBollyDetails';
import Bollywood from './Component/Bollywood/Bollywood';
import DisplayMoreBannerDetail from './Component/Banner/DisplayMoreBannerDetail';
import ShivComponent from './Component/Shiv/ShivComponent';
function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/bannerImage" element={<BannerImage />} />
          <Route path="/bannerImage/:id" element={<DisplayMoreBannerDetail />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/bollywood/:id" element={<DisplayBollyDetails />} />
          <Route path="/shiv" element={<ShivComponent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



