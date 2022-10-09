import styles from "./Wherebuy.module.scss";
import venarus_1 from "../../images/venarus_1.png";
import venarus_2 from "../../images/venarus_2.png";



const Wherebuy = () => {
  return (
    <section className={styles.wherebuy}>
      <div>
      <div>
     <h2>Где купить</h2>
     <p>Ветонизирующее средство ВЕНАРУС вы можете приобрести в аптеках вашего города</p>
      </div>
      <div>
        <div>
          <img src={venarus_1} width="680px" height="400px" alt="venarus" />
          <img src={venarus_2} width="374px" height="374px" alt="venarus" />
        </div>
        <div>
        <button>apteka.ru</button>
        <button>366.ru</button>
        <button>stolichki.ru</button>
        </div>
        
      </div>
      </div>
    </section>
  );
};

export default Wherebuy;