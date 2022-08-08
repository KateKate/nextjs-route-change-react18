import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Page1() {
  const now = performance.now();
  while (performance.now() - now < 100) {}

  return (
    <>
      <h1 className={styles.title}>Page1</h1>

      <div className={styles.grid}>
        <p className={styles.card}>
          <Link href="/">Go to Index</Link>
        </p>
      </div>
    </>
  );
}
