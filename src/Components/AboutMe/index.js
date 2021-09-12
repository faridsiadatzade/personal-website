import React, {useState, useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import divider from "../../Assets/Images/divider.png" ;
import imgAbout from "../../Assets/Images/about_me_pic2.jpg" ;

const AboutMe = (data) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    let item = data.data;

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        AOS.init({
          duration : 2000
        });

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className="unslate_co--section" id="about-section">
            <div className="container">

            <div className="section-heading-wrap text-center mb-5">
                    <h2 className="heading-h2 text-center divider" data-aos="fade-down"><span className="gsap-reveal">About Me</span></h2>
                    <span className="gsap-reveal">
                        <img src={divider} alt="divider" data-aos="flip-left" width="76" />
                    </span>
                </div>
                <div className="row mt-5 justify-content-between">
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <figure className="dotted-bg gsap-reveal-img ">
                            <img src={imgAbout} alt="Image" className="img-fluid" />
                        </figure>
                    </div>
                    <div className="col-lg-4 pr-lg-5">
                        <h4 className="mb-4 gsap-reveal">{item.about}</h4>
                        <ul className={(scrollPosition > 1500 && scrollPosition < 2250) ? "about-info about-info-animation mt-4 px-md-0 px-2" : "about-info mt-4 px-md-0 px-2"}>
                            <li className="d-flex"><span>Name:</span> <span>{item.name}</span></li>
                            <li className="d-flex"><span>Date of birth:</span> <span>{item.DateOfBirth}</span></li>
                            <li className="d-flex"><span>Address:</span> <span>{item.Address}</span></li>
                            <li className="d-flex"><span>Military Service:</span> <span>{item.MilitaryService}</span></li>
                            <li className="d-flex"><span>Email:</span> <span>{item.Email}</span></li>
                            <li className="d-flex"><span>Phone: </span> <span>{item.Phone}</span></li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AboutMe;