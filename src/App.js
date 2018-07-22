import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <h1 className="brand">Logo</h1>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Departments</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <form>
              <input
                placeholder="Search for jobs by keywords"
                type="text"
              />
              <button>Search</button>
            </form>
            <a href="#">Jobs</a>
          </nav>
        </header>
        <div id="hero">
          <h2>Purchasing Assistant</h2>
          <p>Amsterdam, The Netherlands</p>
        </div>
        <div id="form-applpy">
          <h3>Apply for the position of purchasing assistant</h3>
          <form>
            <div className="row">
              <div className="col">
                <h4>Personal details*</h4>
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
              <div className="col">
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4>Your motivation*</h4>
                <textarea />
              </div>
              <div className="col">
                <h4>
                  Attach your documents (pdf, doc(x), jpg, max. 4mb)
                </h4>
                <div className="file-row">
                  <p>Resume*</p>
                  <button>Upload</button>
                  <button>Dropbox</button>
                </div>
                <div className="file-row">
                  <p>Portfolio</p>
                  <button>Upload</button>
                  <button>Dropbox</button>
                </div>
                <div className="file-row">
                  <p>Photo</p>
                  <button>Upload</button>
                  <button>Dropbox</button>
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
                <p>
                  <input type="checkbox" /> Send me a copy
                </p>
                <button>Apply for this job</button>
              </div>
            </div>
          </form>
        </div>
        <div className="faq">
          <div className="row">
            <div className="col">
              <h2>Application Procedure</h2>
              <ul>
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
            <div>
              <h2>Got a question?</h2>
              <p>
                <strong>Please contact recruitment</strong>
              </p>
              <p>T. +31 20 123 456 78</p>
              <p>
                Or <a href="mailto:">send us an email</a>
              </p>
            </div>
          </div>
        </div>
        <footer id="footer">
          <dl>
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
          <dl>
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
          <dl>
            <dt>Follow us</dt>
            <dd>
              <a href="#">Newsletter</a>
            </dd>
            <dd>
              <a href="#">Instagram</a>
            </dd>
            <dd>
              <a href="#">Twitter</a>
            </dd>
            <dd>
              <a href="#">Tumblr</a>
            </dd>
            <dd>
              <a href="#">Linkedin</a>
            </dd>
            <dd>
              <a href="#">Facebook</a>
            </dd>
            <dd>
              <a href="#">Pinterest</a>
            </dd>
            <dd>
              <a href="#">YouTube</a>
            </dd>
            <dd>
              <a href="#">Google+</a>
            </dd>
          </dl>
          <dl>
            <dt>Jobs alert</dt>
            <dd>
              <a href="#">Subscribe to our job alert</a>
            </dd>
          </dl>
        </footer>
      </div>
    );
  }
}

export default App;
