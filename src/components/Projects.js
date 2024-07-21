import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/prj_1.png";
import projImg2 from "../assets/img/prj_3.png";
import projImg3 from "../assets/img/prj_4.jpg";
import projImg5 from "../assets/img/prj_5.png";
import projImg6 from "../assets/img/prj_6.png";
import projImg7 from "../assets/img/prj_7.png";
import projImg8 from "../assets/img/prj_8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "Human Resource Management Website",
            position: "Front-end & Back-end Dev",
            description:
                "TypeScript, Next.js, JavaScript, NodeJS, Express.js, MongoDB",
            imgUrl: projImg1,
            link: "https://github.com/KhoiMaiDinh/HRManagement_FE",
        },
        {
            title: "Restaurant Delivery App",
            position: "Front-end Dev",
            description:
                "JavaScript, React Native, NodeJS, Express.js, MongoDB, FireBase",
            imgUrl: projImg2,
            link: "https://github.com/KhoiMaiDinh/Restaurant_FE",
        },
        {
            title: "Clothing & Fashion App",
            position: "Front-end & Back-end Dev",
            description:
                "JavaScript, React Native, NodeJS, Express.js, MongoDB, Cloudinary",
            imgUrl: projImg3,
            link: "https://github.com/KhoiMaiDinh/FashionApp_FE",
        },
        {
            title: "Messenger Clone",
            position: "Front-end Dev",
            description:
                "TypeScript, ReactJS, Redux, Chat Engine APIs, FireBase",
            imgUrl: projImg5,
            link: "https://github.com/KhoiMaiDinh/Messenger_Clone",
        },
    ];

    const ai_projects = [
        {
            title: "Deepfake Detection Model & Demo",
            position: "JS, React Native, Flask, CNN network, Azure, Docker",
            imgUrl: projImg6,
            link: "https://github.com/KhoiMaiDinh/DA2_BE",
        },
        {
            title: "Automation Parking System",
            position: "TS, React Tauri, Flask, YOLOv5, Azure, Docker",
            imgUrl: projImg7,
            link: "https://github.com/KhoiMaiDinh/ParkingManagement",
        },
        {
            title: "Age & Gender Prediction",
            position:
                "JS, React Native, Flask, Deep Learning, Render.com cloud",
            imgUrl: projImg8,
            link: "https://github.com/KhoiMaiDinh/Age-and-Gender_FE",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={30}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <h2>Projects</h2>
                                    <p>
                                        Some projects I built during my
                                        University time - Individually or with
                                        my Partners.
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
                                                    Web-App
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">
                                                    AI
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
                                                <Row xs={1} md={2}>
                                                    {projects.map(
                                                        (project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row xs={1} md={3}>
                                                    {ai_projects.map(
                                                        (project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </Row>
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
