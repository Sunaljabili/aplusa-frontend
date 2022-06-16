import Head from "next/head";
import Image from "next/image";
import Location from "../components/Location";
import Projects from "../components/Projects";
import styles from "../styles/Home.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import News from "../components/News";
import PartnerCompanies from "../components/PartnerCompanies";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <News/>
      <Projects/>
      <PartnerCompanies />
      <Location />
    </div>
  );
}
