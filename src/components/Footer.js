import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/gmail.svg";

export const Footer = () => {
    return (
        <footer id="socials" className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ height: "50px", width: "50px" }}
                        />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a
                                href="https://www.linkedin.com/in/khoi-md"
                                target="_blank"
                            >
                                <img src={navIcon1} alt="Icon" />
                            </a>
                            <a
                                href="https://www.facebook.com/khoii.md"
                                target="_blank"
                            >
                                <img src={navIcon2} alt="Icon" />
                            </a>
                            <a
                                href="https://www.instagram.com/dinhkhoimai"
                                target="_blank"
                            >
                                <img src={navIcon3} alt="Icon" />
                            </a>
                            <a
                                href="https://github.com/KhoiMaiDinh"
                                target="_blank"
                            >
                                <img src={navIcon4} alt="Icon" />
                            </a>
                            <a href="mailto:khoimd.dev@gmail.com">
                                <img src={navIcon5} alt="Icon" />
                            </a>
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
