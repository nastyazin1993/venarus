import styles from "./GridSection.module.scss";



const TableSection = () => {
  return (
    <section className={styles.gridSection}>
      <div>
      <div>
     <h2>Полезная информация</h2>
     <p>ВЕНАРУС — надежный помощник в лечении варикоза, хранитель женских ног на пути к её мечте!</p>
      </div>
      <div>
      <div>
      <div><div><p>Профилак- тические упражнения</p></div></div>
      <div><div><p>Диагностика и способы лечения</p></div></div>
      <div><div><p>Рекомен- дации по питанию </p></div></div>
      <div><p>Факты<br></br>о варикозе</p></div>
      </div>
      <button>Подробнее &gt;</button>
      </div>
      </div>
    </section>
  );
};

export default TableSection;