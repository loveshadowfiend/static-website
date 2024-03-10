import { Logo } from "./Logo";

export const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <Logo className="header__logo" />

                <nav className="header__menu">
                    <ul className="header__menu-list">
                        <li className="header__menu-item">
                            <a className="header__menu-link" href="">
                                Overview
                            </a>
                        </li>
                        <li className="header__menu-item">
                            <a className="header__menu-link" href="">
                                Features
                            </a>
                        </li>
                        <li className="header__menu-item">
                            <a className="header__menu-link" href="#/team">
                                Team
                            </a>
                        </li>
                        <li className="header__menu-item">
                            <a className="header__menu-link" href="">
                                Platform
                            </a>
                        </li>
                        <li className="header__menu-item">
                            <a
                                className="header__menu-link-button a-button"
                                href=""
                            >
                                Purchase
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
