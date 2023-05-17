import styles from './projects_component.module.css';
import ProjectContainer from './project_container';
import { v4 as uuidv4 } from 'uuid';

const ProjectsComponent = ({ projects }) => {
  const projectsContainerList = projects.map((p) => {
    return (
      <li key={uuidv4()}>
        <ProjectContainer project={p} />
      </li>
    );
  });
  return (
    <>
      <section id="projects-section" className={styles['projects-section']}>
        <h2>Some of my projects</h2>
        <ul className={styles['projects-container']}>
          {projectsContainerList}
        </ul>
      </section>
      <hr className={styles.hr} />
    </>
  );
};

export default ProjectsComponent;
