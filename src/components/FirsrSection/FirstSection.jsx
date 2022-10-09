import styles from "./FirstSection.module.scss";
import play from "../../images/play.svg";
import strelka_save from "../../images/strelka_down.svg";
// import strelka from "../../images/strelka.svg";
import mestolink from "../../images/mestolink.svg";
import venarus_1 from "../../images/venarus_1.png";
import venarus_2 from "../../images/venarus_2.png";

const FirstSection = () => {
  return (
    <section className={styles.firstSection}>
      <div>
        <h1>Надежный помощник в лечении варикоза</h1>

        <ul>
          <li>
            <a href="/">
              <img src={play} width="48px" height="47px" alt="play" /> Схема
              приема
            </a>
          </li>
          <li>
            <a href="/">
              <img src={strelka_save} width="48px" height="47px" alt="play" />{" "}
              Инструкция
            </a>
          </li>
          <li>
            <a href="/">
              <img src={mestolink} width="48px" height="47px" alt="play" /> Где
              купить
            </a>
          </li>
        </ul>
      </div>

      <div>
        <div>
          <img src={venarus_1} width="680px" height="400px" alt="venarus" />
          <img src={venarus_2} width="374px" height="374px" alt="venarus" />
          <img src={venarus_1} width="680px" height="400px" alt="venarus" />
        </div>
        <div>
        <button></button>
        <button></button>
          {/* <img src={strelka} width="68px" height="68px" alt="venarus" />
          <img src={strelka} width="68px" height="68px" alt="venarus" /> */}
        </div>
        <button>Где купить &gt;</button>
      </div>
    </section>
  );
};

export default FirstSection;
