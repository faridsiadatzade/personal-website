
const Footer = (data) => {
  let item = data.data;
    return (
        <footer className="unslate_co--footer unslate_co--section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              
              <div className="footer-site-logo"><a href="#"><span>FaridSi</span>adatzade</a></div>

              <ul className="footer-site-social">
                <li><a target="_blank" href={item.twitter}>Twitter</a></li>
                <li><a target="_blank" href={item.instagram}>Instagram</a></li>
                <li><a target="_blank" href={item.skype}>skype</a></li>
                <li><a target="_blank" href={item.website}>website</a></li>
              </ul>
        
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;