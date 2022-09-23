import css from './Section.module.css';

import PropTypes from 'prop-types';

const Section = ({ sectionTitle, children }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>{sectionTitle}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;

// ------------------ PropTypes -------------------------

Section.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
