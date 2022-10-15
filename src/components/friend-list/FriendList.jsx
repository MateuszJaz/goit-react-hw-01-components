import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import Friend from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={Friend.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};
