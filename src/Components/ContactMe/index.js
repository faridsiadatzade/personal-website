import React, {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import divider from "../../Assets/Images/divider.png" ;


const ContactMe = (data) => {
  let item = data.data;

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

    return (
        <div className="unslate_co--section" id="contact-section">
        <div className="container">

          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal" data-aos="fade-down">Contact Me</span></h2>
            <span className="gsap-reveal"><img src={divider} alt="divider" data-aos="flip-down" width="76" /></span>
          </div>

          <div className="row d-flex contact-info mb-5">
            <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000" data-aos-delay="0">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-linkedin"></span>
                </div>
                <h3 className="mb-4">linkedin</h3>
                <p><a target="_blank" href="https://www.linkedin.com/in/farid-siadatzadeh/">{item.linkedin}</a></p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000" data-aos-delay="500">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-phone2"></span>
                </div>
                <h3 className="mb-4">Contact Number</h3>
                <p><a target="_blank" href="tel://+989360010251">{item.ContactNumber}</a></p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000" data-aos-delay="1000">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-contact_mail"></span>
                </div>
                <h3 className="mb-4">Email Address</h3>
                <p><a target="_blank" href="mailto:info@yoursite.com">{item.EmailAddress}</a></p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000" data-aos-delay="1500">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-github"></span>
                </div>
                <h3 className="mb-4">github</h3>
                <p><a target="_blank" href="https://github.com/faridsiadatzade">{item.github}</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ContactMe;