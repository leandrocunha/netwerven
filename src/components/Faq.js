import React from 'react';

const Faq = () => (
  <div id="Faq">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 faq-wrapper">
          <div className="row">
            <div className="col-md-7">
              <h2 className="title">Application Procedure</h2>
              <ul className="procedures-list">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </li>
              </ul>
              <p>
                <a href="#">Continue reading</a>
              </p>
            </div>
            <div className="col">
              <h2 className="title">Got a question?</h2>
              <p>
                <strong>Please contact recruitment</strong>
              </p>
              <p>
                T. +31 20 123 456 78<br />
                Or <a href="mailto:">send us an email</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Faq;
