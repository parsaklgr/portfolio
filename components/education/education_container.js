import styles from "./education_container.module.css";

const EducationContainer = (props) => {
  const { university, level, time, major } = props.education;
  return (
    <section className={styles["education-container"]}>
      <div className={styles["image-container"]}>
        <img
          className={styles["image"]}
          src="/University_of_Tehran_logo.svg"
          alt="The logo of the University of Tehran"
        />
      </div>
      <div className={styles["description"]}>
        <h3>
          {level}: <span>{major}</span>
        </h3>
        <h4>{university}</h4>
        <p>{time}</p>
      </div>
    </section>
  );
};

export default EducationContainer;
