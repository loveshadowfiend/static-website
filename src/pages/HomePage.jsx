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
                                Amazings startup. Made by CATS.
                            </h1>
                            <h5 className="hero__text-h5">
                                Welcome to our incredible startup created by a
                                team of talented CATS. We strive to bring
                                innovation and excellence to the tech world,
                                providing solutions that make a difference. Join
                                us on this exciting journey!
                            </h5>
                        </div>

                        <div className="hero__image">
                            <img src="Image.png" alt="" />
                        </div>

                        <div className="hero__tech">
                            <div className="hero__tech-sass">
                                <FontAwesomeIcon
                                    className="hero__tech-icon"
                                    icon={faSass}
                                />
                                <h5 className="hero__tech-h5">SASS</h5>
                                <p>
                                    Our styles are powered by SASS, providing a
                                    clean and maintainable codebase. Customize
                                    and extend with ease, ensuring a seamless
                                    user experience.
                                </p>
                            </div>
                            <div className="hero__tech-html">
                                <FontAwesomeIcon
                                    className="hero__tech-icon"
                                    icon={faHtml5}
                                />
                                <h5 className="hero__tech-h5">HTML5</h5>
                                <p>
                                    Embrace the latest in web development with
                                    HTML5. Our markup is designed to be modern,
                                    efficient, and compatible with a wide range
                                    of devices, ensuring a responsive and
                                    accessible application.
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
