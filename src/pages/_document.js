import Document, { Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover"
          />
          
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="icon" type="image/png" href="/images/favIcon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
