import Image from "next/image";
import styles from "../styles/PartnerCompanies.module.scss";

const PartnerCompanies = () => {
  return (
    <div>
      <section className={styles.partnerCompanies}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className={styles.title}>
                        <h5>Partnyor Şirkətlər </h5>
                        <h6>Partnyor Şirkətlər qrupu</h6>
                    </div>
                </div>
            </div>
          <div className="row mt-4">
            <div className="col-lg-3">
              <div className={styles.imgAreas}>
                <div className={styles.imgFront}>
                  <Image
                    src="/img/partner-companies/mobotix-1.png"
                    alt="Mobotix Logo-1"
                    width="305px"
                    height="50px"
                  />
                </div>
                <div className={styles.imgBack}>
                  <Image
                    src="/img/partner-companies/mobotix-2.png"
                    alt="Mobotix Logo-2"
                    width="305px"
                    height="50px"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.imgAreas}>
                <div className={styles.imgFront}>
                  <Image
                    src="/img/partner-companies/geovision-1.png"
                    alt="Mobotix Logo-1"
                    width="250px"
                    height="50px"
                  />
                </div>
                <div className={styles.imgBack}>
                  <Image
                    src="/img/partner-companies/geovision-2.png"
                    alt="Mobotix Logo-2"
                    width="250px"
                    height="50px"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.imgAreas}>
                <div className={styles.imgFront}>
                  <Image
                    src="/img/partner-companies/assaAbloy-1.png"
                    alt="Mobotix Logo-1"
                    width="250px"
                    height="50px"
                  />
                </div>
                <div className={styles.imgBack}>
                  <Image
                    src="/img/partner-companies/assaAbloy-2.png"
                    alt="Mobotix Logo-2"
                    width="250px"
                    height="50px"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.imgAreas}>
                <div className={styles.imgFront}>
                  <Image
                    src="/img/partner-companies/ruptela-1.png"
                    alt="Mobotix Logo-1"
                    width="250px"
                    height="50px"
                  />
                </div>
                <div className={styles.imgBack}>
                  <Image
                    src="/img/partner-companies/ruptela-2.png"
                    alt="Mobotix Logo-2"
                    width="250px"
                    height="50px"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.imgAreas}>
                <div className={styles.imgFront}>
                  <Image
                    src="/img/partner-companies/teltonika-1.png"
                    alt="Mobotix Logo-1"
                    width="250px"
                    height="50px"
                  />
                </div>
                <div className={styles.imgBack}>
                  <Image
                    src="/img/partner-companies/teltonika-2.png"
                    alt="Mobotix Logo-2"
                    width="250px"
                    height="50px"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.imgAreas}>
                <div className={styles.imgFront}>
                  <Image
                    src="/img/partner-companies/vingcard-1.png"
                    alt="Mobotix Logo-1"
                    width="250px"
                    height="50px"
                  />
                </div>
                <div className={styles.imgBack}>
                  <Image
                    src="/img/partner-companies/vingcard-2.png"
                    alt="Mobotix Logo-2"
                    width="250px"
                    height="50px"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.imgAreas}>
                <div className={styles.imgFront}>
                  <Image
                    src="/img/partner-companies/bakcell-1.png"
                    alt="Mobotix Logo-1"
                    width="250px"
                    height="50px"
                  />
                </div>
                <div className={styles.imgBack}>
                  <Image
                    src="/img/partner-companies/bakcell-2.png"
                    alt="Mobotix Logo-2"
                    width="250px"
                    height="50px"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.imgAreas}>
                <div className={styles.imgFront}>
                  <Image
                    src="/img/partner-companies/azercell-1.png"
                    alt="Mobotix Logo-1"
                    width="250px"
                    height="50px"
                  />
                </div>
                <div className={styles.imgBack}>
                  <Image
                    src="/img/partner-companies/azercell-2.png"
                    alt="Mobotix Logo-2"
                    width="250px"
                    height="50px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default PartnerCompanies;
