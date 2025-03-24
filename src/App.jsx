import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavMenu from "./NavMenu.jsx";
import DisplayPage from "./DisplayPage.jsx";
import Card from "./Card.jsx";
import Intro from "./Intro.jsx";


//function needed to make use of intro and card routes better
function AppContent() {
    const location = useLocation(); //get the current route
    const isHomePage = location.pathname === "/scp/Home"; //check if its the home page or not
    return (
        <div>
            <NavMenu />

            {/* make sure intro is only displayed on home page */}
            {isHomePage && <Intro />}

            <Routes>
                {/* Home route */}
                <Route path="/" element={<Navigate to="/scp/Home" />} />

                {/* Route for cards to be displayed */}
                <Route path="/scp/Home" element={<Card />} />

                {/* Route for SCP subject pages */}
                <Route path="/scp/:subject" element={<DisplayPage />} />
            </Routes>
        </div>
    );
}

export default function App() {
    return (
        <div className="background">
        <Router>
            <AppContent />
        </Router>
        </div>
    );
}
