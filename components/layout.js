import Head from "next/head";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>TJ - Tanuj Damani - Web3, Front End, Project Management, Entrepreneur </title>
        <meta
          name="description"
          content="Tanuj is an Entrepreneur in the Web3 and Crypto world. He is a web3 developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Nav />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </div>
  );
}
