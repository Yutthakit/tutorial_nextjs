import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <main>
          <Main />
          <NextScript />
        </main>
      </Html>
    );
  }
}
