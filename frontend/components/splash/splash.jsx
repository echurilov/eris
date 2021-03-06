import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
    }
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = { email: 'athena@pantheon.io', password: 'pallas'};
    this.props.processForm(demoUser)
  }

  render() {
    return(
      <div>
        <header>
          <div className="header-outer">
            <nav className="header-inner">
              <ul className="left-nav-list">
                <li><div className="logo-box"><Link className="logo-img" to={'/'}>Eris</Link></div></li>
                <li className="nav-item"><a className="nav-link" href="https://github.com/echurilov/eris">Download</a></li>
                <li className="nav-item"><a className="nav-link" href="https://github.com/echurilov/eris/wiki">Wiki</a></li>
                <li className="nav-item"><Link className="nav-link" to={'/'}>Jobs</Link></li>
                <li className="nav-item"><div className="dropdown">
                  <button className="dropbtn">Developer</button>
                  <div className="dropdown-content">
                    <a className="dropdown-link" href="https://elena-churilov.com/">
                      <span className="dropdown-text">Portfolio</span>
                    </a>
                    <a className="dropdown-link" href="https://github.com/echurilov/">
                      <span className="dropdown-text">Github</span>
                  </a>
                    <a className="dropdown-link" href="https://www.linkedin.com/in/elenachurilov/">
                      <span className="dropdown-text">LinkedIn</span>
                  </a>
                    <a className="dropdown-link" href="https://angel.co/elena-churilov">
                      <span className="dropdown-text">Angel List</span>
                  </a>
                  </div>
                </div></li>
                <li className="nav-item"><div className="dropdown">
                  <button className="dropbtn">Community</button>
                  <div className="dropdown-content">
                    <Link className="dropdown-link" to={'/'}>
                      <span className="dropdown-text">Partners</span>
                    </Link>
                    <Link className="dropdown-link" to={'/'}>
                      <span className="dropdown-text">Guidelines</span>
                    </Link>
                    <Link className="dropdown-link" to={'/'}>
                      <span className="dropdown-text">Hype Squad</span>
                    </Link>
                    <Link className="dropdown-link" to={'/'}>
                      <span className="dropdown-text">Verification</span>
                    </Link>
                  </div>
                </div></li>
                <li className="nav-item"><Link className="nav-link" to={'/'}>Blog</Link></li>
                <li className="nav-item"><div className="dropdown">
                  <button className="dropbtn">Support</button>
                    <div className="dropdown-content">
                      <Link className="dropdown-link" to={'/'}>
                        <span className="dropdown-text">Help & Support</span>
                      </Link>
                      <Link className="dropdown-link" to={'/'}>
                        <span className="dropdown-text">Status</span>
                      </Link>
                      <Link className="dropdown-link" to={'/'}>
                        <span className="dropdown-text">Parent's Guide</span>
                      </Link>
                      <Link className="dropdown-link" to={'/'}>
                        <span className="dropdown-text">Security</span>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="right-nav-list">
                <button className="button-open"><Link to={'/login'}>Login</Link></button>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <div className= "greeting">
            <h1>It's time to ditch Nike and Harmonia.</h1>
            <p>A chat for deities that's free, secure, and works on both your desktop and phone. Stop paying for Harmonia servers and hassling with Nike. Simplify your life.</p>
            <div className="button-box">
              <button className="button-download">Download</button>
              <button className="button-demo" onClick={this.handleDemo}>Demo Login</button>
            </div>
          </div>
        </main>
        <footer>
        </footer>
      </div>
    )
  }
}

export default Splash;
