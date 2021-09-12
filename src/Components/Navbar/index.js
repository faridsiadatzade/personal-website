

const Navbar = () => (
    <>
        <div className="lines-wrap">
            <div className="lines-inner">
                <div className="lines"></div>
            </div>
        </div>

        <nav className="unslate_co--site-nav site-nav-target">

            <div className="container">

                <div className="row align-items-center justify-content-between text-left">
                    <div className="col-lg-3 col-md-12 d-flex align-items-center">
                        <div className="site-logo pos-absolute">
                            <a href="index.html" className="unslate_co--site-logo"><span>FaridSi</span>adatzade</a>
                        </div>

                        {/* <ul className="site-nav-ul-none-onepage text-right d-inline-block d-lg-none">
                            <li><a href="#" className="js-menu-toggle">Menu</a></li>
                        </ul> */}

                    </div>
                    <div className="col-lg-9 text-right">
                        <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                            <li><a href="#home-section" className="nav-link">Home</a></li>
                            <li><a href="#experiences-section" className="nav-link">Work Experiences</a></li>
                            <li><a href="#about-section" className="nav-link">About</a></li>
                            <li><a href="#skills-section" className="nav-link">Skills</a></li>
                            <li><a href="#projects-section" className="nav-link">Projects</a></li>
                            <li><a href="#contact-section" className="nav-link">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    </>
)

export default Navbar;