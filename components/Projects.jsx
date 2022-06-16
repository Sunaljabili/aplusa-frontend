import Image from "next/image";
import styles from "../styles/Projects.module.scss";

const Projects = () => {
  return (
    <section id={styles.projects}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.title}>
              <h5>Layihələr</h5>
              <h6>Layihələr</h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className={styles.projectBox}>
              <div className={styles.imgBox}>
                <Image
                  src="/img/project/cari-2.png"
                  width="600px"
                  height={420}
                  alt="CariProject Image"
                />
                  <span className={styles.imgTitle}>Cari</span>
              </div>
              <div className={styles.backgroundDiv}>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-box">
              <div className="img-box">
                <Image
                  src="/img/project/bitmish.png"
                  alt="CariProject Image"
                  width="600px"
                  height={420}
                />
                <div className="img-title">
                  <span>Cari</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
