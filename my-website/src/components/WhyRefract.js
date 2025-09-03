import React from "react";
import styles from "./WhyRefract.module.css";

export default function WhyRefract() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why You Should Build With Refract</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3> Effortless UIs</h3>
            <p>
              Build clean, responsive, and scalable interfaces with minimal code.
              Refract takes care of the boilerplate so you can focus on features.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Component-Driven</h3>
            <p>
              Refract embraces modular components, making it easy to reuse,
              customize, and maintain your UI across projects.
            </p>
          </div>

          <div className={styles.card}>
            <h3>High Performance</h3>
            <p>
              Optimized rendering ensures fast load times and smooth interactions,
              even in large-scale applications.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Community Support</h3>
            <p>
              Backed by an active community and rich ecosystem of tools,
              Refract grows with you as your project evolves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
