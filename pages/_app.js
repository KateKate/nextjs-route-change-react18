import '../styles/globals.css';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useRef, useEffect } from 'react';

const metrics = {
  'Next.js-render': [],
  'Next.js-route-change-to-render': [],
};
export function reportWebVitals({ name, value }) {
  if (name.includes('render')) {
    if (!metrics[name]) {
      metrics[name] = [value];
    } else {
      metrics[name].push(value);
    }
  }
}

function MyApp({ Component, pageProps }) {
  const { pathname, push } = useRouter();
  const counter = useRef(0);
  useEffect(() => {
    if (counter.current > 100) {
      return;
    }

    if (pathname === '/') {
      push('/page1');
    } else {
      push('/');
    }
    counter.current++;
  }, [pathname, push]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <Component {...pageProps} />
        <h2>React 18</h2>
        {Object.keys(metrics).map((name) => {
          return (
            <p className={styles.description} key={name}>
              {name} <br />
              <i>
                avg:{' '}
                {Math.round(
                  (metrics[name].reduce((acc, v) => acc + v, 0) /
                    metrics[name].length) *
                    10
                ) / 10}
                , count: {metrics[name].length}
              </i>
            </p>
          );
        })}
      </main>
    </div>
  );
}

export default MyApp;
