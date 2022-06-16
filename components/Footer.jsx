import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import Image from "next/image";
const Footer = () => {
  return (
    <section id={styles.footerStart}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="logoHeader">
              <Link href="/">
                <Image
                className="securitylogo"
                  src="/img/header/securitylogo.png"
                  width="150px"
                  height="65px"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.security}>
              <ul className={styles.list}>
                <h6>A+A Security</h6>
                <li className= {styles.listItem}>
                  <Link href="/about">Haqqımızda</Link>
                </li>
                <li className={styles.listItem} > 
                  <Link href="/produtcs">Məhsullar və həllər</Link>
                </li>
                <li className={styles.listItem} >
                  <Link href="/projects">Layihələr</Link>
                </li>
                <li className={styles.listItem} >
                  <Link href="/news">Xəbərlər</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
          <div className={styles.contact}>
              <ul className={styles.list}>
                <h6>Əlaqə</h6>
                <li className={styles.listItem} >
                (+994 12) 496-00-56
                </li>
                <li className={styles.listItem} >
                (+994 50) 259-05-05
                </li>
                <li className={styles.listItem} >
                sales@aplusa-security.com
                </li>
                <li className={styles.listItem} >
                Akhmad Bay Aga oglu 24B
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.subscribe}>
            <ul className={styles.list}>
                <h6>Abunəlik</h6>
                <li className={styles.listItem}>
                <Link href="facebook.com">
                 <Image
                 width="25px"
                 height="25px"
                 src="/img/sosial-icon/facebook.png"
                 alt="Facebook Logo"
                 />
               </Link>
                </li>
                <li className={styles.listItem}>
                <Link href="facebook.com">
                 <Image
                 width="25px"
                 height="25px"
                 src="/img/sosial-icon/instagram.png"
                 alt="Facebook Logo"
                 />
               </Link>
                </li>
                <li className={styles.listItem}>
                <Link href="facebook.com">
                 <Image
                 width="25px"
                 height="25px"
                 src="/img/sosial-icon/linkedin.png"
                 alt="Facebook Logo"
                 />
               </Link>
                </li>
            
              
             
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Footer;
