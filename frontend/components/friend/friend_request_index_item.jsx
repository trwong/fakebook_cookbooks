import React from 'react';
import { Link } from 'react-router-dom';

class FriendRequestIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleRequest = this.handleRequest.bind(this);
  }

  handleRequest(type) {
    let { patchFriend, destroyFriend, currentUser, getCurrentUser, user } = this.props;
    // debugger;
    return (type === "confirm") ? (
      () => patchFriend(currentUser.id, user.id, "accepted")
        .then(() => getCurrentUser(currentUser.id))
     ) : (
      () => destroyFriend(currentUser.id, user.id)
        .then(() => getCurrentUser(currentUser.id))
     );
  }

  render() {
    let { user } = this.props;
    let { profile_img_url, first_name, last_name, id } = user;

    return (
      <div className="friend-request-index-item">
        <Link to={`/profile/${id}`}>
          <img
            className="profile-thumbnail-medium-circle"
            src={profile_img_url}
            alt="user profile image thumbnail"/>
          <span>{first_name} {last_name}</span>
        </Link>
        {/* TODO3 Add mutual friends */}
        <button
          className="friend-request-confirm-button"
          onClick={this.handleRequest("confirm")}
          >Confirm</button>
        <button
          className="friend-request-confirm-button"
          onClick={this.handleRequest("delete")}
          >Delete Request</button>
      </div>
    );
  }
}

export default FriendRequestIndex;