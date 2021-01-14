import React from 'react';
import '../public/styles/globals.css';
import Head from 'next/head';
import PropTypes from 'prop-types';

function MyApp() {
  return (
    <div>
      <Head>
        <title>tutorial next</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.objectOf(Object).isRequired,
};

export default MyApp;
