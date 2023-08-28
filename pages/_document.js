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
            {/* Individuals utilize this website dedicated to grabbing YouTube thumbnails to extract thumbnails from various YouTube videos. These extracted thumbnails can find applications in presentations, animation projects, and numerous other activities. */}
            <p>How can you make use of this YouTube Thumbnail Grabber website?</p>
            {/* I have provided a set of screenshots that offer guidance on navigating this YouTube Thumbnail Grabber website effectively. The process is straightforward: start by copying the link of the YouTube video whose thumbnail you wish to obtain. Then, proceed to paste the URL into the designated input box. Upon pasting the link, the website will automatically generate thumbnails of different sizes. By clicking the "Download Thumbnail" button, your selected thumbnail will be downloaded directly to your device. For Android users, the images must be saved, while iPhone users might need an alternative method (not specified). */}
            <p>Is it within legal bounds to download YouTube thumbnails?</p>
            {/*Absolutely, downloading YouTube video thumbnails is entirely legal. However, it's crucial to recognize that both the video content and its associated thumbnails are subject to copyright. Therefore, prior to reusing any of these materials, obtaining permission from the original creator is recommended. */}
            <P>Compatibility of this YouTube Thumbnail Grabber website?</P>
            {/*This YouTube Thumbnail Grabber website boasts compatibility with a broad range of devices, excluding iPhones due to the restriction on saving images. The only exception is if you possess a jailbroken iPhone. On the flip side, the website operates seamlessly across various Android devices, as well as laptop and desktop systems. */}
            <P>Are there copyright risks associated with YouTube Thumbnails?</P>

          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
