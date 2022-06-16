import styles from "../styles/Copyright.module.scss"

const Copyright = () => {
  return (
    <section id={styles.copyright}>
            <div className={styles.text}>
                <p className={styles.title}>(c) 2022 A+A Security, Bütün Hüquqlar Qorunur</p>
            </div>
    </section>
  );
};
export default Copyright;
