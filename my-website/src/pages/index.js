import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import styles from './index.module.css';
import WhyRefract from '../components/WhyRefract.js';
import Community from '@site/src/components/Community';

export default function Home() {
  return (
    <Layout
      title="Refract"
      description="A modern JavaScript framework that allows you to build scalable and responsive UIs in a few minutes."
    >
      <main>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.left}>
            <h1>
              Effortless UIs with <br />
              <span className={styles.gradientText}>Reactive Precision.</span>
            </h1>
            <p>Refract is a modern JavaScript framework for today’s web.</p>

            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                Get Started
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="https://www.youtube.com/@TechnicalWriti6"
              >
                Join the Community
              </Link>
            </div>
          </div>

          <div className={styles.right}>
            <CodeBlock language="jsx" title="Counter.jsx">
{`import { createSignal } from "refract";

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button onClick={() => setCount(n => n + 1)}>
      Count: {count()}
    </button>
  );
}`}
            </CodeBlock>
          </div>
        </div>

        {/* Why Refract Section */}
        <WhyRefract />

        {/* Community Section */}
        <Community />
      </main>
    </Layout>
  );
}
