import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faDropbox } from '@fortawesome/free-brands-svg-icons';

class FormApply extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.upload = this.upload.bind(this);
  }

  componentDidMount() {
    const resumeInput = document.querySelector('input[name=resume]');
    resumeInput.addEventListener('change', e => this.validateFile(e));
  }

  submit(e) {
    e.preventDefault();
    const inputsText = document.querySelectorAll(
      'input[name=firstName], input[name=lastName], input[name=city], input[name=country], input[name=phone], textarea[name=motivation]'
    );
    const inputsEmail = document.querySelector('input[name=email]');

    inputsText.forEach(el => {
      el.classList.remove('is-invalid', 'is-valid');
      el.parentNode.classList.remove('is-valid');
    });
    inputsEmail.classList.remove('is-invalid', 'is-valid');

    inputsText.forEach(el => {
      if (el.value.length < 3) {
        el.classList.add('is-invalid');
      } else {
        el.classList.add('is-valid');
        el.parentNode.classList.add('is-valid');
      }
    });

    if (this.validateEmail(inputsEmail.value)) {
      inputsEmail.classList.add('is-valid');
      inputsEmail.parentNode.classList.add('is-valid');
    } else {
      inputsEmail.classList.add('is-invalid');
    }
  }

  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  validateFile = e => {
    const file = e.target.files[0];

    file.size > 4194304 &&
      alert('Only files with up to 4mb are allowed.');

    if (
      file.type !== 'application/pdf' ||
      file.type !== 'application/msword' ||
      file.type !== 'image/jpeg'
    )
      alert('Only .pdf, .doc (x) and .jpg files will be allowed.');
  };

  upload(e) {
    e.preventDefault();
    const resumeInput = document
      .querySelector('input[name=resume]')
      .click();
  }

  render() {
    return (
      <div id="FormApply">
        <div className="container">
          <h3 className="title-section">
            Apply for the position of purchasing assistant
          </h3>
          <div className="row justify-content-center">
            <div className="col-10">
              <form onSubmit={e => this.submit(e)}>
                <h4 className="title-form">Personal details*</h4>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      required
                      className="form-control is-valid"
                      name="firstName"
                      placeholder="First name"
                      type="text"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      required
                      className="form-control"
                      name="lastName"
                      placeholder="Last name"
                      type="text"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      required
                      className="form-control"
                      name="city"
                      placeholder="City"
                      type="text"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      required
                      className="form-control"
                      name="country"
                      placeholder="Country"
                      type="text"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      required
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      type="text"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      required
                      className="form-control"
                      name="phone"
                      placeholder="Phone"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <h4 className="title-form">Your motivation*</h4>
                    <div className="form-group">
                      <textarea
                        required
                        className="form-control"
                        name="motivation"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <h4 className="title-form">
                      Attach your documents{' '}
                      <small>(pdf, doc(x), jpg, max. 4mb)</small>
                    </h4>
                    <div className="file-row">
                      <p>Resume*</p>
                      <button
                        className="btn btn-primary"
                        onClick={this.upload}
                      >
                        <FontAwesomeIcon icon={faDesktop} /> Upload
                      </button>
                      <input name="resume" type="file" />
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
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                        >
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
  }
}

export default FormApply;
