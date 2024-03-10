import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSass, faHtml5 } from "@fortawesome/free-brands-svg-icons";

export const HomePage = () => {
    return (
        <>
            <main>
                <Header />
                <div className="hero">
                    <div className="hero__inner">
                        <div className="hero__text">
                            <h1 className="hero__text-h1">
                                Lorem ipsum dolor sit amet
                            </h1>
                            <h5 className="hero__text-h5">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Unde ducimus sint praesentium
                                nam assumenda suscipit velit, saepe quasi, ut
                                fuga fugiat provident! Nam perferendis veniam,
                                molestias sed perspiciatis ratione suscipit?
                            </h5>
                        </div>

                        <div className="hero__image">
                            <img src="/Image.png" alt="" />
                        </div>

                        <div className="hero__tech">
                            <div className="hero__tech-sass">
                                <FontAwesomeIcon
                                    className="hero__tech-icon"
                                    icon={faSass}
                                />
                                <h5 className="hero__tech-sass-h5">SASS</h5>
                                <p className="hero__tech-sass-text">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Minima, harum.
                                </p>
                            </div>
                            <div className="hero__tech-html">
                                <FontAwesomeIcon
                                    className="hero__tech-icon"
                                    icon={faHtml5}
                                />
                                <h5 className="hero__tech-html-h5">HTML5</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eum ipsa iure nemo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
