/* eslint-disable react/prop-types */
import {
    faTwitter,
    faVk,
    faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TeamMemberCard = (props) => {
    return (
        <div className="team-member-card">
            <img
                className="team-member-card__portrait"
                src={props.imagePath}
                alt=""
            />
            <h5 className="team-member-card__name">{props.name}</h5>
            <p className="team-member-card__duty">{props.duty.toUpperCase()}</p>
            <div className="team-member-card__socials">
                <div className="team-member-card__socials-icon-container">
                    <FontAwesomeIcon
                        className="team-member-card__socials-icon"
                        icon={faTwitter}
                    />
                </div>

                <div className="team-member-card__socials-icon-container">
                    <FontAwesomeIcon
                        className="team-member-card__socials-icon"
                        icon={faVk}
                    />
                </div>

                <div className="team-member-card__socials-icon-container">
                    <FontAwesomeIcon
                        className="team-member-card__socials-icon"
                        icon={faTelegram}
                    />
                </div>
            </div>
        </div>
    );
};
