import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Generate from "../pages/Generate";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/generate" element={<Generate />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
