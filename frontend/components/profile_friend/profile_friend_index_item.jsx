import React from 'react';
import { Link } from 'react-router-dom';

class ProfileFriendIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { user } = this.props;
    
    return (
      <div className="profile-friend-index-item">
        <Link
          className="profile-friend-index-link"
          to={`/profile/${user.id}`}>
          <img
            className="profile-friend-index-item-profile-picture"
            src={ user.profile_img_url }
            alt="user profile picture"/>
          <div
            className="profile-friend-name"
            >{user.first_name} {user.last_name}</div>
        </Link>
      </div>
    );
  }
}

export default ProfileFriendIndexItem;