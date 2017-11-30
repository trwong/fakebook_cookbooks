import React from 'react';
import { Link } from 'react-router-dom';
import FriendRequestIndexContainer from './../friend/friend_request_index_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  componentDidMount() {
    // fetching users to the rest of the app has access to it
    this.props.fetchUsers();
    this.props.getCurrentUser(this.props.user.id);
  }
  
  render() {
    let firstName;
    let userId;
    let profile_img_url;
    // TODO refactor below
    if (this.props.user && Object.keys(this.props.users).length !== 0) {
      firstName = this.props.user.first_name;
      userId = this.props.user.id;
      // profile_img_url = this.props.user.profile_img_url;
      // profile_img_url = this.props.users[userId].profile_img_url;
      profile_img_url = this.props.user.profile_img_url;
    }

    return (
      <header className="loggedin-nav">
        <div className="loggedin-nav-content">

          <div className="loggedin-nav-left">
            <Link to="/feed" >
              <img
                className="loggedin-nav-logo"
                src="/assets/facebook-f-logo.jpg"
                alt=""/>
            </Link>
            <input
              type="text"
              placeholder="Search" />
              {/* TODO3 add search icon to search bar */}
              {/* TODOB add search functionality */}
          </div>

          <div className="loggedin-nav-right">
            <div
              className="loggedin-nav-profile">
              <img
                className="loggedin-nav-profile-picture"
                src={ profile_img_url }
                alt="profile thumbnail"/>
              <Link
                className="loggedin-nav-profile-link"
                to={`/profile/${ userId }`}>{ firstName }</Link>
            </div>
            
            <div
              className="loggedin-nav-home">
              <Link
                className="loggedin-nav-profile-link"
                to="/feed">Home</Link>
            </div>

            <div
              className="loggedin-nav-friend-requests">
              <img
              className="loggedin-nav-friend-requests-icon"
                src="http://res.cloudinary.com/trwong/image/upload/v1512001725/Screen_Shot_2017-11-29_at_4.26.00_PM_vodfbo.png"
                alt="friend request icon"/>

              <div className="nav-friend-requests-pop-up">
                <div className="nav-friend-request-arrow-up"></div>
                <div className="nav-friend-request-header">Friend Requests</div>
                <FriendRequestIndexContainer />
              </div>
            </div>

            <div
              className="loggedin-nav-logout">
            <button
              className="logout-button"
              onClick={this.handleLogout}
              >Log Out</button>
            </div>
          </div>
          
        </div>
      </header>
    );
  }
}

export default NavBar;