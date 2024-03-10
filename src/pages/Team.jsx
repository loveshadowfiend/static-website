import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TeamMemberCard } from "../components/TeamMemberCard";

export const Team = () => {
    return (
        <>
            <main>
                <Header />
                <div className="team">
                    <div className="team__inner">
                        <div className="team__intro">
                            <h3 className="team__intro-h3">Our Awesome Team</h3>
                            <p className="team__intro-p">
                                Welcome to the heart of our innovation – the
                                incredible team behind our success. Each member
                                brings a unique set of skills and passion to the
                                table, driving us towards excellence in every
                                project.
                            </p>
                        </div>

                        <div className="team__button-container">
                            <a className="team__button a-button" href="">
                                Enjoy Our Team
                            </a>
                        </div>

                        <div className="team-member-cards">
                            <TeamMemberCard
                                name="John Titor"
                                duty="UI Designer"
                                imagePath="worker-1.jpeg"
                            />
                            <TeamMemberCard
                                name="Norman Reedus"
                                duty="CEO"
                                imagePath="worker-2.jpeg"
                            />
                            <TeamMemberCard
                                name="Malenia"
                                duty="Blade of Miquella"
                                imagePath="worker-3.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
