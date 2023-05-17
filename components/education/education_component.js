import styles from './education_component.module.css';
import EducationContainer from './education_container';
import { v4 as uuidv4 } from 'uuid';

const EducationComponent = ({ educations }) => {
  const educationsContainerList = educations.map((p) => {
    return (
      <li key={uuidv4()}>
        <EducationContainer education={p} />
      </li>
    );
  });

  return (
    <>
      <section id="education-section" className={styles['education-section']}>
        <h2>My education</h2>
        <ul className={styles['educations-container']}>
          {educationsContainerList}
        </ul>
      </section>
      <hr className={styles.hr} />
    </>
  );
};

export default EducationComponent;
