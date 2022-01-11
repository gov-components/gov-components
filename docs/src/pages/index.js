import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures';
import Mailchimp from 'react-mailchimp-form';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <div className="container">
        <h1 className="pt-5">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>

      <section className="mailchimp">
        <div className="container text--center ">
          <h2>Stay in the loop</h2>
          <p>Get our monthly newsletter into your inbox.</p>
          <Mailchimp
            action="https://seanwuapps.us12.list-manage.com/subscribe/post?u=86082c9bd63a62c9485758892&amp;id=c80262b88b"
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'Email Address',
                type: 'email',
                required: true,
              },
            ]}
            messages={{
              sending: 'Sending...',
              success: 'Thank you for subscribing!',
              error: 'An unexpected internal error has occurred.',
              empty: 'You must write an e-mail.',
              duplicate: 'Too many subscribe attempts for this email address',
              button: 'Subscribe',
            }}
          />
        </div>
      </section>
    </Layout>
  );
}