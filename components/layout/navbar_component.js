import { FcManager } from "react-icons/fc";
import styles from "./navbar_component.module.css";
import { dynaPuff } from "../../app/fonts";
const NavbarComponent = () => {
  return (
    <nav className={`${styles.nav} ${dynaPuff.variable}`}>
      <ul className={styles.nav_ul}>
        <li className={styles.nav_name}>
          <div className={styles.icon}>
            <FcManager />
          </div>{" "}
          <span>Parsa Kalagar</span>
        </li>
        <li>
          <ul className={styles.nav_links}>
            <li>
              <a href="#projects-section">Projects</a>
            </li>
            <li>
              <a href="#education-section">Education</a>
            </li>
            <li>
              <a href="#skills-section">Skills</a>
            </li>
            <li>
              <a href="#contact-section">Contact</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
