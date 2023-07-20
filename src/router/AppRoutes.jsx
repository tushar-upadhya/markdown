import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Generate from "../pages/Generate";
import NotFound from "../pages/NotFound";

import Navbar from "../components/Navbar";

const AppRoutes = () => {
    return (
        <>
            <div className=" text-slate-900 Poppins">
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/generate" element={<Generate />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};

export default AppRoutes;
