import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
class MyDocument extends Document {
  // export default function Document() {
  public static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  public render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
