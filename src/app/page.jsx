import Header from "../components/header";
import Sidebar from "../components/sidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.dashboardContainer}>
        <Sidebar />
      </main>
    </div>
  );
}
