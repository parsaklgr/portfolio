import { BsFileBreakFill } from "react-icons/bs";
import * as faicons from "react-icons/fa";
import * as ioicons from "react-icons/io";
import * as ioicons5 from "react-icons/io5";
import * as siicons from "react-icons/si";
import styles from "./Skill_container.module.css";
import { merienda } from "../../app/fonts";
const SkillContainer = ({ skill }) => {
  const { title, icon } = skill;
  const iconfile = icon.substring(0, 2).toLowerCase();
  let IconElement = "";
  switch (iconfile) {
    case "fa":
      if (faicons[icon]) {
        IconElement = faicons[icon];
      }
      break;
    case "io":
      if (ioicons[icon]) {
        IconElement = ioicons[icon];
      } else if (ioicons5[icon]) {
        IconElement = ioicons5[icon];
      }
      break;
    case "si":
      if (siicons[icon]) {
        IconElement = siicons[icon];
      }
      break;
  }
  return (
    <div className={`${styles["skill-container"]} ${merienda.variable}`}>
      <div className={styles["icon"]}>
        {IconElement != "" ? <IconElement /> : " "}
      </div>
      <p>{title}</p>
    </div>
  );
};

export default SkillContainer;
