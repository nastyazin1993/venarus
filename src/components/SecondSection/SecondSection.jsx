import styles from "./SecondSection.module.scss";
import tablet from "../../images/tablet.svg";
import newdosa from "../../images/newdosa.svg";
import aim from "../../images/aim.svg";


const SecondSection = () => {
  return (
    <section className={styles.secondSection}>
      <div>
      <ul>
          <li>
            
              <img src={aim} width="67px" height="67px" alt="aim" /> 
              <p>Доказанная эффективность</p>
            
          </li>
          <li>
            
              <img src={newdosa} width="67px" height="57px" alt="newdosa" /> 
              <p>Новая дозировка 100 мг + 900 мг</p>
            
          </li>
          <li>
            
              <img src={tablet} width="67px" height="57px" alt="tablet" /> 
              <p>Удобный прием. Одна таблетка в сутки* 	&#128712;</p>
            
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SecondSection;