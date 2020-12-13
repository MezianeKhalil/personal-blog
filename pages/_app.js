import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Almarai&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
