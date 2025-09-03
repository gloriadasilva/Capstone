import React from "react";
import styles from "./styles.module.css";

export default function WhyRefract() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why You Should Build With Refract</h2>

        <div className={styles.grid}>
          <div className={styles.card}>Component 1</div>
          <div className={styles.card}>Component 2</div>
          <div className={styles.card}>Component 3</div>
          <div className={styles.card}>Component 4</div>
        </div>
        
      </div>
    </section>
  );
}
