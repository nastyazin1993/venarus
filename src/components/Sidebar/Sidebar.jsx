
import styles from "./Sidebar.module.scss";

const menu = ["Где купить", "О препарате", "О варикозе", "Решение", "Специалистам", "Геморрой"];

const Sidebar = () => {
  return (
    <div className={styles.sidebar} >
      
      <ul>
        {menu.map((title) => (
          <li key={title}>
            <a href={title}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
