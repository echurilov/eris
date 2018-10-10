import React from 'react';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.removeUserErrors();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processFrom(this.state)
    .then(this.props.history.push('/channels/@me'));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error) => (
          <li key={error + Date.now()}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return(
      <div className="registration-form-container">
        <form className="registration-form-box">
          <br/>
          <section className="registration-form">
            <label>Email:
              <input
                className="registration-input"
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
              />
            </label>
            <br/>
            <label>Username:
              <input
                className="registration-input"
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            <br/>
            <label>Password:
              <input
                className="registration-input"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br/>
            <button
              type="submit"
              onClick={this.handleSubmit}>
              Sign Up
            </button>
          </section>
        </form>
      </div>
    )
  }
}

export default Registration;
