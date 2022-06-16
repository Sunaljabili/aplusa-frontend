import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";
const News = () => {
  return (
    <section id="news">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="myCard">
              <div className="cardBody">
                <Image src="/img/project/cari.pngs" alt="Hello" width="200px" height="200px" />
                <div className="title">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequuntur dolores excepturi minus sunt reprehenderit odit
                    a accusantium! Iure ullam odio id temporibus animi? Fugit
                    non architecto quidem vitae modi officia!
                    <FontAwesomeIcon
                    icon={faSearch}
                    style={{fontSize:20,color:"yellow"}}
                    />
                    <FontAwesomeIcon icon= { ["fa-solid fa-right-long"]} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
          <div className="col-lg-3"></div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </section>
  );
};

export default News;
