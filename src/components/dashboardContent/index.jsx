import styles from "./dashboardContent.module.css";
import SummaryCards from "@/components/summaryCards";
import ChartContainer from "@/components/chartContainer";
import MovieStats from "../movieStats";
import AdditionalInfo from "../adittionalInfo";

const DashboardContent = () => {
    return (
        <section className={styles.content}>
            <div className={styles.welcomeBar}>
                <h2>Bem-vindo ao Dashboard</h2>
                <p>Data: 10/03/2025</p>
            </div>

            <SummaryCards />

            <ChartContainer />

            <MovieStats />

            <AdditionalInfo />
        </section>
    );
}

export default DashboardContent;