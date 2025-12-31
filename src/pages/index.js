import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Everybody's Pet Care
        </Heading>
        <p className="hero__subtitle">A social enterprise proposal</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="./docs/intro">
            View business plan
          </Link>
          
          
          
          
          
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Everybody's Pet Care - Investment Proposal"
      description="A hybrid social enterprise model delivering essential pet care to vulnerable populations. Proposal for grantmakers, fiscal sponsors, and mission-aligned investors.">
      <HomepageHeader />
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="text--center padding-vert--lg">
              <Heading as="h2" className="margin-bottom--lg">
                For grantmakers & strategic partners
              </Heading>
              <p className="hero__subtitle margin-bottom--lg">
                This site contains detailed documentation for potential investors in a sustainable, 
                impact-focused model that addresses critical gaps in community pet care.
              </p>
              <p className="text--sm margin-top--sm">
  Prepared by Nick Lieurance, Founder
</p>
              

            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}