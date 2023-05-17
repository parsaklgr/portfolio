import SkillContainer from "./Skill_container";
import { v4 as uuidv4 } from "uuid";
import styles from "./Skills_component.module.css";

const SkillsComponent = ({ skills }) => {
  const skillsList = skills.map((s) => {
    return (
      <li key={uuidv4()}>
        <SkillContainer skill={s} />
      </li>
    );
  });
  return (
    <>
      <section id="skills-section" className={styles["skills-section"]}>
        <h2>Skills</h2>
        {<ul className={styles["skills-container"]}>{skillsList}</ul>}
      </section>
      <hr className={styles["hr"]} />
    </>
  );
};

export default SkillsComponent;
