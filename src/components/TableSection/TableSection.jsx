import styles from "./TableSection.module.scss";
import elipse_1 from "../../images/elipse_1.svg";
import elipse_2 from "../../images/elipse_2.svg";
import elipse_3 from "../../images/elipse_3.svg";
import elipse_4 from "../../images/elipse_4.svg";
import elipse_5 from "../../images/elipse_5.svg";



const TableSection = () => {
  return (
    <section className={styles.tableSection}>
      <div>
      <div>
     <h2>Комплексное действие</h2>
     <p>Венарус показан для терапии симптомов хронических заболеваний вен (устранения и облегчения симптомов).</p>
      </div>
      <div>
      <img src={elipse_1} width="134px" height="134px" alt="elipse" />
      <img src={elipse_2} width="134px" height="134px" alt="elipse" />
      <img src={elipse_3} width="134px" height="134px" alt="elipse" />
      <img src={elipse_4} width="134px" height="134px" alt="elipse" />
      <img src={elipse_5} width="134px" height="134px" alt="elipse" />
        <div>
          <a href="/">Подробнее &gt;</a>
          <p>Помогает предотвратить судороги</p>
        </div>
        <div>
          <a href="/">Подробнее &gt;</a>
          <p>Способствует снижению тяжести в ногах</p>
        </div>
        <div>
          <a href="/">Подробнее &gt;</a>
          <p>Способствует снижению болевых ощущений</p>
        </div>
        <div>
          <a href="/">Подробнее &gt;</a>
          <p>Помогает уменьшить отеки</p>
        </div>
        <div>
          <a href="/">Подробнее &gt;</a>
          <p>Оказывает ангиопротекторное и венотонизурующее действие</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default TableSection;