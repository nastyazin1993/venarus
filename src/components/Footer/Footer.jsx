import styles from "./Footer.module.scss";
import vk from "../../images/vk.svg";
import f from "../../images/f.svg";
import tw from "../../images/tw.svg";
import ok from "../../images/ok.svg";
import pharmlogo from "../../images/pharmlogo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div></div>
      <div>
        <div>
          <h2>БИОЛОГИЧЕСКИ АКТИВНАЯ ДОБАВКА. НЕ ЯВЛЯЕТСЯ ЛЕКАРСТВОМ</h2>
        </div>
        <div>
          <a href="/">Сообщить о нежелательном явлении</a>
          <a href="/">Условия пользования сайтом и файлами Cookies</a>
          <ul>
            <li>
              <a href="/">
                <img src={vk} height="24px" alt="play" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={f} height="24px" alt="play" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={tw} height="24px" alt="play" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={ok} height="24px" alt="play" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>
            г. Москва, ул. Шаболовка, д. 31, стр. 11, 4 этаж Телефон: +7 (495)
            555-55-55
          </p>
          <div>
            <img src={pharmlogo} height="41px" alt="play" />
            <p>Создание сайтов Фарм-студия №1 в Рунете</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
