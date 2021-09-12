import React, { useState, useEffect } from "react";
import divider from "../../Assets/Images/divider.png";
import AOS from 'aos';
import "aos/dist/aos.css";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const Skills = (data) => {
  const [displayMore, setDisplayMore] = useState(false);

  const display = () => {
    setDisplayMore(!displayMore);
  }

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [displayMore]);

  return (
    <div className="unslate_co--section section-counter" id="skills-section">
      <div className="container">
        <div className="section-heading-wrap text-center mb-5">
          <h2 className="heading-h2 text-center divider"><span className="gsap-reveal" data-aos="fade-down">My Skills</span></h2>
          <span className="gsap-reveal"><img src={divider} data-aos="flip-left" alt="divider" width="76" /></span>
        </div>
        {data.data.map((item, index) => (
          <>
            <section key={index} className={(!displayMore && index === 1) ? "d-none" : null}>
              <h3>{item.header.name}</h3>
              <div className="row pt-5">
                {item.skills.map((data, i) => (
                  <div key={i} className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-2" data-aos="fade-up">
                    <div className="counter-v1 text-center">
                      <span className="number-wrap">
                      <span className="number number-counter">
                        <CountUp start={0} end={data.degree} redraw={true} duration={1.5}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                      </span>
                        <span className="append-text">%</span>
                      </span>
                      <span className="counter-label">{data.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        ))}
        <div className="text-center displayMore" onClick={display}>{!displayMore ? "more" : "less"}</div>
      </div>
    </div>
  )
}

export default Skills;