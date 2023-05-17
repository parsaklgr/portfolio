import styles from "./project_container.module.css";

const ProjectContainer = (props) => {
  const { title, description, image, liveView, sourceCode } = props.project;
  return (
    <section className={styles["project-container"]}>
      <h1>{title}</h1>
      <div className={styles["image-container"]}>
        <img className={styles["image"]} src={"/" + image} alt={image} />
      </div>
      <p>{description}</p>
      <div className={styles["button-container"]}>
        <a href={liveView}>
          <button>Live view</button>
        </a>
        <a href={sourceCode}>
          <button>Source code</button>
        </a>
      </div>
    </section>
  );
};

export default ProjectContainer;
