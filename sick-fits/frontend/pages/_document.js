import Document, { Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    <Html lang="en-us">
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
  }
}
