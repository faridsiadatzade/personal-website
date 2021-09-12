import React, {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import tadbir from "../../Assets/Images/tadbir.png"
import rahpooyan from "../../Assets/Images/rahpooyan.png"
import parham from "../../Assets/Images/parham.png"
import nokarto from "../../Assets/Images/nokarto.png"

const WorkExperiences = (data) => {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <section className="ftco-section ftco-no-pb" id="experiences-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center ftco-animate">
            <h1 className="big big-2">Resume</h1>
            <h2 className="my-4 heading-h2" data-aos="fade-down">Work Experiences</h2>
          </div>
        </div>
        <div className="row">
          {data.data.map((item, index) => (
            <div className="col-md-6" key={index} data-aos={(index+1)%2 == 0 ? "fade-left" : "fade-right"}>
              <div className="resume-wrap ftco-animate row">
                <div className="col-6">
                  <span className="date">{item.to != "" ? item.from + "-" + item.to : item.from }</span>
                  <h2>{item.Company}</h2>
                  <span className="position">{item.position}</span>
                </div>
                <div className="col-6 text-right"><img className="img-fluid" style={{width: item.logo != "parham" ? "150px" : null, maxHeight: "100px"}} src={item.logo == "tadbir" ? tadbir : item.logo == "rahpooyan" ? rahpooyan : item.logo == "parham" ? parham : nokarto } /></div>
                <p className="mt-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center ftco-animate">
            <p><a href="#about-section" className="btn btn-primary py-4 px-5" data-aos="flip-left">Download CV</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperiences;