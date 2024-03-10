import {
    faTwitter,
    faVk,
    faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "./Logo";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <nav className="footer__menu">
                    <ul className="footer__menu-list">
                        <li className="footer__menu-item">
                            <a href="" className="footer__menu-link">
                                About
                            </a>
                        </li>
                        <li className="footer__menu-item">
                            <a href="" className="footer__menu-link">
                                Policy
                            </a>
                        </li>
                        <li className="footer__menu-item">
                            <a href="" className="footer__menu-link">
                                Terms
                            </a>
                        </li>
                    </ul>
                </nav>

                <Logo className="footer__logo" />

                <nav className="footer__menu-socials">
                    <ul className="footer__menu-socials-list">
                        <li className="footer__menu-socials-item">
                            <a href="" className="footer__menu-socials-link">
                                Contacts
                            </a>
                        </li>
                        <li className="footer__menu-socials-item">
                            <a href="" className="footer__menu-socials-link">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li className="footer__menu-item">
                            <a href="" className="footer__menu-socials-link">
                                <FontAwesomeIcon icon={faVk} />
                            </a>
                        </li>
                        <li className="footer__menu-item">
                            <a href="" className="footer__menu-socials-link">
                                <FontAwesomeIcon icon={faTelegram} />
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="footer__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem, ipsum?
                </div>
            </div>
        </footer>
    );
};
