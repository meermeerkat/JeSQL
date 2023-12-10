import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { RecoilRoot } from "recoil";

import Navbar from "@/components/navbar";

import Home from "@/pages/Home.page";
import Help from "@/pages/Help.page";
import Scripts from "@/pages/Scripts.page";
import Upload from "@/pages/Upload.page";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RecoilRoot>
        <BrowserRouter>
          <Navbar />
          <div className="p-[20px] mx-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/scripts" element={<Scripts />} />
              <Route path="/upload" element={<Upload/>} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
        </BrowserRouter>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
