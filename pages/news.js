import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import NewsCard from '../components/newscard';
import newsContent from '../data/news-data';

export default function News(props) {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { title, content } = newsContent[locale];
  return (
    <div className={styles.container}>
      <Head>
        <title>TV</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          <div
            style={{
              padding: '4px',
              marginRight: '4px',
            }}
          >
            <span>Current Language: </span>
            <span
              style={{
                borderRadius: '3px',
                backgroundColor: 'blue',
                color: 'white',
                padding: '2px',
              }}
            >
              {locale}
            </span>
          </div>
          <Link
            activeClassName={locale === 'es-ES'}
            href={asPath}
            locale='es-ES'
          >
            es-ES
          </Link>

          <Link
            activeClassName={locale === 'en-US'}
            href={asPath}
            locale='en-US'
          >
            en-US
          </Link>
          <Link
            activeClassName={locale === 'fr-FR'}
            href={asPath}
            locale='fr-FR'
          >
            fr-FR
          </Link>
        </div>

        <div className={styles.newscontainer}>
          <div className={styles.yournewscasts}>
            <h3>{title}</h3>
          </div>

          <div>
            {content.map((newsItem, i) => (
              <NewsCard key={i} news={newsItem} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
