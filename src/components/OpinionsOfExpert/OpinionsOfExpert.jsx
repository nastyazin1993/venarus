import styles from "./OpinionsOfExpert.module.scss";
import expert1 from "../../images/expert1.png";
import expert2 from "../../images/expert2.jpg";
import expert3 from "../../images/expert3.jpg";
import elipse from "../../images/elipse.svg";

const TableSection = () => {
  return (
    <section className={styles.opinionsOfExpert}>
      <div>
        <div>
          <h2>Мнение специалистов</h2>
          <p>
            Фармакотерапия — неотъемлемый компонент современного лечения
            хронического заболевания вен.
          </p>
        </div>
        <div>
          <div>
            <img src={expert1}  alt="play" />
            <img src={expert2} alt="play" />
            <img src={expert3}  alt="play" />
          </div>
          <ul>
            <li><img src={elipse} alt="play" /></li>
            <li><img src={elipse} alt="play" /></li>
            <li><img src={elipse} alt="play" /></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TableSection;
