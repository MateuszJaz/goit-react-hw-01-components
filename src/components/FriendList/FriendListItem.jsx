import style from './friendListItem.module.css';
import PropTypes from 'prop-types'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span className={isOnline ? style.active : style.status}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}