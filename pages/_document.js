import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react"; // Import React module

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <script
            data-ad-client="YOUR_AD_CLIENT_ID"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Add the new div containing the provided text */}
          <div>
            <p>
              What is the purpose of using this YouTube Thumbnail Grabber
              website?
            </p>
            {/* ... Paste the rest of the provided text here ... */}
            {/* ... (Make sure to wrap the text in appropriate JSX elements) */}
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
