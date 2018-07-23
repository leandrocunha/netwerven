import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
  faTumblr,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer id="Footer">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 footer-wrapper">
          <div className="row">
            <dl id="jobs" className="col-md">
              <dt>Jobs at</dt>
              <dd>
                <a href="#">Home</a>
              </dd>
              <dd>
                <a href="#">Jobs</a>
              </dd>
              <dd>
                <a href="#">About</a>
              </dd>
              <dd>
                <a href="#">Department</a>
              </dd>
            </dl>
            <dl id="info" className="col-md">
              <dt>Information</dt>
              <dd>
                <a href="#">F.A.Q</a>
              </dd>
              <dd>
                <a href="#">Application process</a>
              </dd>
              <dd>
                <a href="#">Privacy policy</a>
              </dd>
              <dd>
                <a href="#">Contact</a>
              </dd>
            </dl>
            <dl id="follow" className="col-md">
              <dt>Follow us</dt>
              <dd>
                <a href="#">
                  <span className="newsletter">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>{' '}
                  Newsletter
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span className="instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>{' '}
                  Instagram
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span className="twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>{' '}
                  Twitter
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span className="tumblr">
                    <FontAwesomeIcon icon={faTumblr} />
                  </span>{' '}
                  Tumblr
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span className="linkedin">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </span>{' '}
                  Linkedin
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span className="facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </span>{' '}
                  Facebook
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span className="pinterest">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </span>{' '}
                  Pinterest
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span className="youtube">
                    <FontAwesomeIcon icon={faYoutube} />
                  </span>{' '}
                  YouTube
                </a>
              </dd>
              <dd>
                <a href="#">
                  <span className="googleplus">
                    <FontAwesomeIcon icon={faGooglePlusG} />
                  </span>{' '}
                  Google+
                </a>
              </dd>
            </dl>
            <dl id="jobs" className="col-md">
              <dt>Jobs alert</dt>
              <dd>
                <a href="#">Subscribe to our job alert</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
