import {Link} from "react-router-dom";

export default function PortfolioNavigation() {
    return (
        <div id="portfolio-nav">
            <Link to="/Portfolio/AboutMe" id="aboutme-link">About Me</Link><br/>
            <Link to="/Portfolio/Projects" id="projects-link">Projects</Link><br/>
            <Link to="/Portfolio/Resume" id="resume-link">Resume</Link><br/>
        </div>
    );
}