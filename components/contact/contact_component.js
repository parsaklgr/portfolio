import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import styles from './contact_component.module.css';

const ContactComponent = () => {
  return (
    <section id="contact-section" className={styles['contact-section']}>
      <ul className={styles['contact-ul']}>
        <li>
          <div className={styles['icon']}>
            <FaLinkedin />
          </div>
          <a href="https://www.linkedin.com/in/parsa-kalagar-910368150/">
            LinkedIn
          </a>
        </li>
        <li>
          <div className={styles['icon']}>
            <FaGithub />
          </div>
          <a href="https://github.com/parsaklgr">Github</a>
        </li>
      </ul>
    </section>
  );
};

export default ContactComponent;
