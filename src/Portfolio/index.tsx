import { Routes, Route, Navigate } from "react-router";

import PortfolioNavigation from "./Navigation";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";

export default function Portfolio() {
    return (
        <div id="portfolio">
            <h1>Kyra Holmes Portfolio</h1>
            <PortfolioNavigation />
            <Routes>
                <Route path="/" element={<Navigate to="/Portfolio/AboutMe"/>}/>
                <Route path="/AboutMe" element={<AboutMe />}/>
                <Route path="/Projects" element={<Projects />}/>
                <Route path="/Resume" element={<Resume />}/>
            </Routes>
        </div>
    );
}