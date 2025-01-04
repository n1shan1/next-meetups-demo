import React from "react";
import styles from "./MeetupDetails.module.css";
export default function MeetupDetails(props) {
  return (
    <section className={styles.details}>
      <img src={props.image} alt={props.title} layout="fill" />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
