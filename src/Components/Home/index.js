import AboutMe from "../AboutMe"
import ContactMe from "../ContactMe"
import Footer from "../Footer"
import Header from "../Header"
import Navbar from "../Navbar"
import NavbarMobil from "../NavbarMobil"
import Projects from "../Projects"
import Skills from "../Skills"
import WorkExperiences from "../WorkExperiences"


const Home = (data) => {
    return (
        <div className="unslate_co--site-wrap">
            <NavbarMobil />
            <div className="unslate_co--site-inner">
                <Navbar />
                <Header />
                <WorkExperiences data={data.data.workExperiences} />
                <AboutMe data={data.data.info} />
                <Skills data={data.data.skills} />
                <Projects data={data.data.projects} />
                <ContactMe data={data.data.contact} />
            </div>
                <Footer data={data.data.contact} />
        </div>
    )

}

export default Home;