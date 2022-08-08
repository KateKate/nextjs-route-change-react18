import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const now = performance.now();
  while (performance.now() - now < 100) {}

  return (
    <>
      <h1 className={styles.title}>Index</h1>

      <div className={styles.grid}>
        <p className={styles.card}>
          <Link href="/page1">Go to Page1</Link>
        </p>
      </div>
    </>
  );
}
