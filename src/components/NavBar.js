import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Nav.Link
                        href="#home"
                        className={
                            activeLink === "home"
                                ? "active navbar-link"
                                : "navbar-link"
                        }
                        onClick={() => onUpdateActiveLink("home")}
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ height: "50px", width: "50px" }}
                        />
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                href="#home"
                                className={
                                    activeLink === "home"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("home")}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#about"
                                className={
                                    activeLink === "about"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("about")}
                            >
                                About
                            </Nav.Link>
                            <Nav.Link
                                href="#skills"
                                className={
                                    activeLink === "skills"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("skills")}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link
                                href="#projects"
                                className={
                                    activeLink === "projects"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("projects")}
                            >
                                Projects
                            </Nav.Link>
                            <Nav.Link
                                href="#connect"
                                className={
                                    activeLink === "contact"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("contact")}
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a
                                    href="https://www.linkedin.com/in/khoi-md"
                                    target="_blank"
                                >
                                    <img src={navIcon1} alt="" />
                                </a>
                                <a
                                    href="https://www.facebook.com/khoii.md"
                                    target="_blank"
                                >
                                    <img src={navIcon2} alt="" />
                                </a>
                                <a
                                    href="https://www.instagram.com/dinhkhoimai"
                                    target="_blank"
                                >
                                    <img src={navIcon3} alt="" />
                                </a>
                            </div>
                            <a
                                href="https://docs.google.com/document/d/1756GKUN1xPvFVD8Re0hsjawt2YZ0tgto/edit?usp=sharing&ouid=107904145289271235562&rtpof=true&sd=true"
                                target="_blank"
                            >
                                <button className="vvd">
                                    <span>Resume</span>
                                </button>
                            </a>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};
