import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import rocket from "../assets/img/rocket.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <h2>Skills</h2>
                                    <p>
                                        I possess strong skills in{" "}
                                        <span className="highlight-span">
                                            HTML, CSS, JavaScript, TypeScript,
                                            ReactJS, Next.js, and React Native
                                        </span>
                                        , enabling me to develop robust and
                                        interactive web and mobile applications.
                                        These expertise cover{" "}
                                        <span className="highlight-span">
                                            Front-end development
                                        </span>
                                        ,{" "}
                                        <span className="highlight-span">
                                            Back-end development
                                        </span>
                                        , and{" "}
                                        <span className="highlight-span">
                                            Mobile application development
                                        </span>
                                        , allowing for versatile and
                                        comprehensive project execution.
                                    </p>
                                    <Tab.Container
                                        id="projects-tabs"
                                        defaultActiveKey="first"
                                    >
                                        <Nav
                                            variant="pills"
                                            className="nav-pills mb-5 justify-content-center align-items-center"
                                            id="pills-tab"
                                        >
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">
                                                    Front-end
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">
                                                    Back-end
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">
                                                    Database-Deploy
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content
                                            id="slideInUp"
                                            className={
                                                isVisible
                                                    ? "animate__animated animate__slideInUp"
                                                    : ""
                                            }
                                        >
                                            <Tab.Pane eventKey="first">
                                                <p>
                                                    <img
                                                        className="rocket"
                                                        src={rocket}
                                                    />
                                                    <span className="highlight-span">
                                                        HTML & CSS:
                                                    </span>{" "}
                                                    Structure and style web
                                                    pages for responsive,
                                                    visually appealing designs.
                                                    <br />
                                                    <img
                                                        className="rocket"
                                                        src={rocket}
                                                    />
                                                    I use{" "}
                                                    <span className="highlight-span">
                                                        JavaScript & TypeScript:
                                                    </span>{" "}
                                                    To add interactivity and
                                                    enhance code quality for
                                                    scalable projects.
                                                    <br />
                                                    <img
                                                        className="rocket"
                                                        src={rocket}
                                                    />
                                                    <span className="highlight-span">
                                                        React Ecosystem:
                                                    </span>{" "}
                                                    I can build single-page
                                                    apps, SSR/static sites, and
                                                    cross-platform mobile apps
                                                    with ReactJS, Next.js, and
                                                    React Native.
                                                    <br />
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>
                                                    <img
                                                        className="rocket"
                                                        src={rocket}
                                                    />
                                                    I have good knowledge of{" "}
                                                    <span className="highlight-span">
                                                        Restful APIs
                                                    </span>
                                                    <br />
                                                    <img
                                                        className="rocket"
                                                        src={rocket}
                                                    />
                                                    For Back-end, I mainly work
                                                    with{" "}
                                                    <span className="highlight-span">
                                                        Node.js & Express.js
                                                    </span>{" "}
                                                    to develop scalable
                                                    high-performance system.
                                                    <br />
                                                    <img
                                                        className="rocket"
                                                        src={rocket}
                                                    />
                                                    I also use{" "}
                                                    <span className="highlight-span">
                                                        Flask
                                                    </span>{" "}
                                                    to build light-weighted
                                                    server-side applications
                                                    with AI related APIs.
                                                    <br />
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>
                                                    <img
                                                        className="rocket"
                                                        src={rocket}
                                                    />
                                                    I have work with both
                                                    relational and
                                                    non-relational DB includes{" "}
                                                    <span className="highlight-span">
                                                        MongoDB, MS SQL Server,
                                                        PostgreSQL
                                                    </span>{" "}
                                                    <br />
                                                    <img
                                                        className="rocket"
                                                        src={rocket}
                                                    />
                                                    To deploy my applications,
                                                    both front-end and back-end,
                                                    I use{" "}
                                                    <span className="highlight-span">
                                                        Render, Vercel
                                                    </span>
                                                    {" and especially "}
                                                    <span className="highlight-span">
                                                        Azure
                                                    </span>
                                                    <br />
                                                    <img
                                                        className="rocket"
                                                        src={rocket}
                                                    />
                                                    I also have basic knowledge
                                                    of{" "}
                                                    <span className="highlight-span">
                                                        Docker
                                                    </span>
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
};
