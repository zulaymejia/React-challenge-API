import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/zulay-mejia-360234236/">
                      LinkedIn
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/zulaymejia">GitHub</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Company Name</h3>
                <p>Created by: Zulay Mejia Web developer</p>
              </div>
            </div>
            <p className="copyright">Zulay Mejia © 2023</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
