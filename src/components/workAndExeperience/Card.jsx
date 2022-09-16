import React from "react";
import styles from "../workAndExeperience/WorkEducation.module.css";

const Card = (props) => {
  return (
    <div className={styles["workEducation-card"]}>
      <div className={styles["card-year"]}>
        <p>{props.year}</p>
      </div>
      <div className={styles["card-info"]}>
        <p className={styles["work-name"]}>{props.title}</p>
        <p>{props.name}</p>
        <ul>
          <li>{props.taskOne}</li>
          <li>{props.taskTwo}</li>
          <li>{props.taskThree}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
