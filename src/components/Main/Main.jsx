import styles from "./Main.module.scss";
import FirstSection from "../FirsrSection/FirstSection"
import RunningLine from "../RunningLine/RunningLine"
import SecondSection from "../SecondSection/SecondSection"
import TableSection from "../TableSection/TableSection"
import AboutProdaction from "../AboutProdaction/AboutProdaction"
import OpinionsOfExpert from "../OpinionsOfExpert/OpinionsOfExpert"
import GridSection from "../GridSection/GridSection"
import Wherebuy from "../Wherebuy/Wherebuy"

const Main = () => {
  return (
    <main className={styles.main}>
      <FirstSection />
      <RunningLine />
      <SecondSection />
      <TableSection/>
      <AboutProdaction/>
       <OpinionsOfExpert/>
       <GridSection/>
       <Wherebuy/>
      
    </main>
  );
};

export default Main;
