import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import avatar from "../assets/img/avatar.jpg";
import another_avatar from "../assets/img/another_avatar.jpg";
import act1 from "../assets/img/se_activity.jpg";
import act2 from "../assets/img/school.jpg";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const About = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="about-bx wow zoomIn">
                            <h2>About</h2>
                            <p>
                                I'm 21 years old Software developer from Da
                                Nang, Viet Nam
                            </p>
                            <ul className="about-ul">
                                <li>
                                    ❓Curios about all sort of software
                                    infrastructure
                                </li>
                                <li>🗣️ Excellent communication abilities.</li>
                                <li>💪 A team player and a work dedicator</li>
                                <li>🌱 Currently learning VueJS</li>
                                <li>
                                    ❤️ What I love: Football, Traveling,
                                    Trekking, Coding, Café{" "}
                                </li>
                            </ul>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider"
                            >
                                <div className="item">
                                    <div className="item-box">
                                        <div className="front-img">
                                            <img
                                                className="front-img-img"
                                                src={avatar}
                                            />
                                        </div>
                                        <img
                                            className="back-img"
                                            src={meter1}
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-box">
                                        <div className="front-img">
                                            <img
                                                className="front-img-img"
                                                src={another_avatar}
                                            />
                                        </div>
                                        <img
                                            className="back-img"
                                            src={meter1}
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-box">
                                        <div className="front-img">
                                            <img
                                                className="front-img-img"
                                                src={act1}
                                            />
                                        </div>
                                        <img
                                            className="back-img"
                                            src={meter1}
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-box">
                                        <div className="front-img">
                                            <img
                                                className="front-img-img"
                                                src={act2}
                                            />
                                        </div>
                                        <img
                                            className="back-img"
                                            src={meter1}
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="transition"></div>
            </div>
            <img
                className="background-image-left"
                src={colorSharp}
                alt="Image"
            />
        </section>
    );
};
