import React from "react";
import styles from "./Community.module.css";

export default function Community() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Join a Community of Millions</h2>
        <p className={styles.subtitle}>
          Discover why developers around the world are building with Refract.
        </p>

        <div className={styles.marquee}>
          <div className={styles.track}>
            <div className={styles.card}>🌍 Global Network</div>
            <div className={styles.card}>🤝 Peer-to-Peer Support</div>
            <div className={styles.card}>🚀 Access to Latest Tools</div>
            <div className={styles.card}>🎓 Learning & Growth</div>
            {/* duplicate cards for seamless looping */}
            <div className={styles.card}>🌍 Global Network</div>
            <div className={styles.card}>🤝 Peer-to-Peer Support</div>
            <div className={styles.card}>🚀 Access to Latest Tools</div>
            <div className={styles.card}>🎓 Learning & Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
}
