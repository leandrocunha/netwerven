import React from 'react';

const FormApply = () => (
  <div id="form-apply">
    <div className="container">
      <h3 className="text-center">
        Apply for the position of purchasing assistant
      </h3>
      <form>
        <h4>Personal details*</h4>
        <div className="form-row">
          <div className="form-group col-6">
            <input
              className="form-control"
              placeholder="First name"
              type="text"
            />
          </div>
          <div className="form-group col-6">
            <input
              className="form-control"
              placeholder="Last name"
              type="text"
            />
          </div>
          <div className="form-group col-6">
            <input
              className="form-control"
              placeholder="City"
              type="text"
            />
          </div>
          <div className="form-group col-6">
            <input
              className="form-control"
              placeholder="Country"
              type="text"
            />
          </div>
          <div className="form-group col-6">
            <input
              className="form-control"
              placeholder="Email"
              type="text"
            />
          </div>
          <div className="form-group col-6">
            <input
              className="form-control"
              placeholder="Phone"
              type="text"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <h4>Your motivation*</h4>
            <div className="form-group">
              <textarea className="form-control" />
            </div>
          </div>
          <div className="col">
            <h4>
              Attach your documents{' '}
              <small>(pdf, doc(x), jpg, max. 4mb)</small>
            </h4>
            <div className="file-row">
              <p>Resume*</p>
              <button className="btn btn-primary">Upload</button>
              <button className="btn btn-primary">Dropbox</button>
            </div>
            <div className="file-row">
              <p>Portfolio</p>
              <button className="btn btn-primary">Upload</button>
              <button className="btn btn-primary">Dropbox</button>
            </div>
            <div className="file-row">
              <p>Photo</p>
              <button className="btn btn-primary">Upload</button>
              <button className="btn btn-primary">Dropbox</button>
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
              <div className="col">
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
);

export default FormApply;
