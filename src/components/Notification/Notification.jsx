import css from './Notification.module.css';

import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className={css.text}>{message}</p>;
};

export default Notification;

// ------------------ PropTypes -------------------------

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
