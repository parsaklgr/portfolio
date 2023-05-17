import { BsCodeSlash } from "react-icons/bs";
import styles from "./welcome_component.module.css";
import { silkscreen } from "../../app/fonts";
const WelcomeComponent = () => {
  return (
    <>
      <section className={styles.welcome}>
        <div className={styles["bgWrap"]}>
          <img
            className={styles["image"]}
            src={"/florian-olivo-4hbJ-eymZ1o-unsplash.jpg"}
            alt="background image: software development"
          />
        </div>
        <section id="intro" className={silkscreen.variable}>
          <h1>Welcome!</h1>
          <h3>I&apos;m a developer</h3>
        </section>
        <section id="icon" className={styles.icon}>
          <BsCodeSlash />
        </section>
      </section>
    </>
  );
};

export default WelcomeComponent;
