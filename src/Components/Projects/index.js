import React, {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import divider from "../../Assets/Images/divider.png" ;
import adminplus from "../../Assets/Images/adminplu.jpg" ;
import onlineplus from "../../Assets/Images/onlineplus.png" ;
import rahpooyan from "../../Assets/Images/rahpooyan.png" ;
import artak from "../../Assets/Images/artak.png" ;
import delta from "../../Assets/Images/delta.ico" ;
import applyman from "../../Assets/Images/applyman.png" ;

const Projects = (data) => {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

    return (
        <div className="unslate_co--section" id="projects-section">
        <div className="container">
          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal" data-aos="fade-down">Projects</span></h2>
            <span className="gsap-reveal"><img src={divider} alt="divider" data-aos="flip-down" width="76" /></span>
          </div>
          <div className="row">
            {data.data.map((item, index) => (
              <div key={index} className={(index == 1 || index == 2 || index == 5) ? "col-md-7" : "col-md-5"} data-aos={(index == 1 || index == 2 || index == 5) ? "flip-down" : "zoom-in-up"}>
                <div className="resume-wrap ftco-animate row">
                  <div className="col-6">
                    <h2 className="title">{item.title}</h2>
                    <span className="position"><p style={{color: "white"}}>For: {item.For}</p></span>
                  </div>
                  <div className="col-6 text-right"><img className="img-fluid" style={{maxWidth: "120px", maxHeight: "80px"}} src={item.logo == "adminplus" ? adminplus : item.logo == "onlineplus" ? onlineplus : item.logo == "rahpooyan" ? rahpooyan : item.logo == "artak" ? artak : item.logo == "delta" ? delta : item.logo == "applyman" ? applyman : null} /></div>
                  <p className="mt-4">{item.description}</p>
                  <p className="time">{item.time}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    )
}

export default Projects;