import React from 'react';

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
  }

  render() {
    if (this.props.user === undefined) {return null};
    return(
      <div className="user-info">
        <p>Logged in as {this.props.user.username}</p>
          <form className="logout-form-box">
            <br/>
            <section className="logout-form">
              <button
                type="submit"
                onClick={this.handleSubmit}>
                Log Out
              </button>
            </section>
          </form>
      </div>
    )
  }
}

export default UserHome;
