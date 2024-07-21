import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, position, description, imgUrl, link }) => {
    return (
        <Col>
            <a target="_blank" href={link} style={{ color: "white" }}>
                <div className="proj-imgbx">
                    <img src={imgUrl} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{position}</span>
                        <br />
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    );
};
