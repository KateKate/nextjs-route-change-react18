import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const now = performance.now();
  while (performance.now() - now < 100) {}

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <h1 className={styles.title}>Index</h1>

      <div className={styles.grid}>
        <p className={styles.card}>
          <Link href="/page1">Go to Page1</Link>
        </p>
      </div>
      {/* 
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}
    </>
  );
}
