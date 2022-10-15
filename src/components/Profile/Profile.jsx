import PropTypes from 'prop-types';
import Profile from './profile.module.css';

export const UserProfile = ({ username, tag, location, avatar, stats }) => (
  <div className={Profile.profile}>
    <div className={Profile.description}>
      <img src={avatar} alt="User avatar" className={Profile.avatar} />
      <p className={Profile.name}>{username}</p>
      <p className={Profile.tag}>@{tag}</p>
      <p className={Profile.location}>{location}</p>
    </div>
    <ul className={Profile.stats}>
      {[
        [1, 'Followers', stats.followers],
        [2, 'Views', stats.views],
        [3, 'Likes', stats.likes],
      ].map(([id, text, value]) => (
        <li key={id} className ={Profile.item}>
          <span className={Profile.label}>{text}</span>
          <span className={Profile.quantity}>{value}</span>
        </li>
      ))}
    </ul>
  </div>
);

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
