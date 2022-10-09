import React from "react";
import styles from "./AboutProdaction.module.scss";
import strelka from "../../images/strelka.svg";

const AboutProdaction = () => {
  const [firstVideo, setfirstVideo] = React.useState(false);
  const change = () => {
    setfirstVideo(true);
  };
  const changedown = () => {
    setfirstVideo(false);
  };
  return (
    <section className={styles.aboutProdaction}>
      <div>
        <h2>О производстве Венарус</h2>
        <div>
          <div>
            <div>
              <div></div>
              {firstVideo ? (
                <iframe
                  src="https://www.youtube.com/embed/yi76qVL9jXY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/lGdOxT52c8M"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )}
            </div>
            {firstVideo ? (
              <iframe
                src="https://www.youtube.com/embed/lGdOxT52c8M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/yi76qVL9jXY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            )}

            <div>
              <button onClick={change}>
                {" "}
                <img src={strelka} width="68px" height="68px" alt="venarus" />
              </button>
              <button onClick={changedown}>
                {" "}
                <img src={strelka} width="68px" height="68px" alt="venarus" />
              </button>
            </div>
          </div>
          <button>Подробнее &gt;</button>
        </div>
      </div>
    </section>
  );
};

export default AboutProdaction;
