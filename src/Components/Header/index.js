import React, {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

const Header = () => {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

    return (
        <div className="cover-v1 jarallax" id="home-section">
          <div className="container">
            <div className="row align-items-center">
                
              <div className="col-md-7 mx-auto text-left">
                <span className="subheading d-block">Hello!</span><br></br>
                <h1 className="heading gsap-reveal-hero d-block">I'm <span>Farid</span></h1><br></br>
                <h2 className="subheading gsap-reveal-hero d-block mt-4">
                  <span className="d-block mb-4">Front-End Developer</span><br></br>
                  <span className="d-block mt-3">@ "Tadbir Pardaz" Company</span>
                </h2>
              </div>
      
            </div>
          </div>
    
    
        <a href="#experiences-section" className="mouse-wrap smoothscroll">
          <span className="mouse">
            <span className="scroll"></span>
          </span>
          <span className="mouse-label">Scroll</span>
        </a>
    
      </div>
    )
}

export default Header;