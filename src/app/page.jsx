import Header from "../components/header";
import Sidebar from "../components/sidebar";
import DashboardContent from "@/components/dashboardContent";
import Footer from "@/components/footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.dashboardContainer}>
        <Sidebar />
        <DashboardContent />
      </main>
      <Footer />
    </div>
  );
}
