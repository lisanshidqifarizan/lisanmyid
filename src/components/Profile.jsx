import About from "./About.jsx"
import Contact from "./Contact.jsx"
import Me from '../assets/img/projectsImg/me.png'

const Profile = () => {
    return (
        <>
            <div>
                <div class="profile-wrapper">
                    <div>
                        {/* Profile Section */}
                        <div class="profile">
                            <img
                                src={Me}
                                alt="Lisan Shidqi Farizan"
                                format="avif"
                                quality="low"
                            />
                            <div>
                                <p>
                                    <span class="material-symbols-outlined"> id_card </span>Lisan Shidqi
                                    Farizan
                                </p>
                                <p>
                                    <span class="material-symbols-outlined"> engineering </span>Junior
                                    Front-End
                                </p>
                                <p>
                                    <span class="material-symbols-outlined"> cake </span>April 2003
                                </p>
                            </div>
                        </div>
                        {/* Contact Section */}
                        <Contact />
                    </div>
                    <About />
                </div>
            </div>
        </>
    )
}
export default Profile;
