import css from './Section.module.css';

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
