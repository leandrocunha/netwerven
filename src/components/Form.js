import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faDropbox } from '@fortawesome/free-brands-svg-icons';

const FormApply = () => (
  <div id="FormApply">
    <div className="container">
      <h3 className="title-section">
        Apply for the position of purchasing assistant
      </h3>
      <div className="row justify-content-center">
        <div className="col-10">
          <form>
            <h4 className="title-form">Personal details*</h4>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  className="form-control"
                  placeholder="First name"
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  className="form-control"
                  placeholder="Last name"
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  className="form-control"
                  placeholder="City"
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  className="form-control"
                  placeholder="Country"
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  className="form-control"
                  placeholder="Email"
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  className="form-control"
                  placeholder="Phone"
                  type="text"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <h4 className="title-form">Your motivation*</h4>
                <div className="form-group">
                  <textarea className="form-control" />
                </div>
              </div>
              <div className="col">
                <h4 className="title-form">
                  Attach your documents{' '}
                  <small>(pdf, doc(x), jpg, max. 4mb)</small>
                </h4>
                <div className="file-row">
                  <p>Resume*</p>
                  <button className="btn btn-primary">
                    <FontAwesomeIcon icon={faDesktop} /> Upload
                  </button>
                  <button className="btn btn-primary">
                    <FontAwesomeIcon icon={faDropbox} /> Dropbox
                  </button>
                </div>
                <div className="file-row">
                  <p>Portfolio</p>
                  <button className="btn btn-primary">
                    <FontAwesomeIcon icon={faDesktop} /> Upload
                  </button>
                  <button className="btn btn-primary">
                    <FontAwesomeIcon icon={faDropbox} /> Dropbox
                  </button>
                </div>
                <div className="file-row">
                  <p>Photo</p>
                  <button className="btn btn-primary">
                    <FontAwesomeIcon icon={faDesktop} /> Upload
                  </button>
                  <button className="btn btn-primary">
                    <FontAwesomeIcon icon={faDropbox} /> Dropbox
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>
                  <a href="#"> Back to job description</a>
                </p>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col send-a-copy">
                    <p>
                      <input type="checkbox" /> Send me a copy
                    </p>
                  </div>
                  <div className="col">
                    <button className="btn btn-primary btn-block">
                      Apply for this job
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default FormApply;
