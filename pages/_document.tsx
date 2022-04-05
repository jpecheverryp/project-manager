import NextDocument, { Html, Main, NextScript } from 'next/document';
import Head from 'next/head';
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='eng'>
        <Head>
          <title>Project_Manager</title>
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
