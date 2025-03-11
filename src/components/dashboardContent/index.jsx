import styles from "./dashboardContent.module.css";
import SummaryCards from "@/components/summaryCards";
import ChartContainer from "@/components/chartContainer";
import MovieStats from "../movieStats";
import AdditionalInfo from "../adittionalInfo";

const DashboardContent = () => {

    const summaryData = [
        { title: 'Arrecadação Diária', value: 'R$ 12.450,00', change: '+15% em relação a ontem', isPositive: true },
        { title: 'Arrecadação Mensal', value: 'R$ 345.780,00', change: '+8% em relação ao mês passado', isPositive: true },
        { title: 'Arrecadação Semestral', value: 'R$ 1.987.650,00', change: '+12% em relação ao semestre anterior', isPositive: true },
        { title: 'Ocupação Média', value: '78%', change: '-3% em relação à semana anterior', isPositive: false }
    ];

    const movies = [
        { name: 'Aventuras Intergaláticas', tickets: 2450, revenue: 'R$ 85.750,00', occupancy: '92%', days: 14 },
        { name: 'O Mistério do Vale', tickets: 1870, revenue: 'R$ 65.450,00', occupancy: '75%', days: 21 },
        { name: 'Amor em Paris', tickets: 1240, revenue: 'R$ 43.400,00', occupancy: '62%', days: 28 },
        { name: 'Velocidade Máxima 5', tickets: 2180, revenue: 'R$ 76.300,00', occupancy: '87%', days: 7 }
    ];

    const sessions = [
        { time: '14:30', movie: 'Aventuras Intergaláticas', room: 'Sala 1', capacity: '87% vendido' },
        { time: '15:00', movie: 'O Mistério do Vale', room: 'Sala 2', capacity: '65% vendido' },
        { time: '16:45', movie: 'Amor em Paris', room: 'Sala 3', capacity: '42% vendido' },
        { time: '19:00', movie: 'Velocidade Máxima 5', room: 'Sala 1', capacity: '93% vendido' }
    ];

    const concessions = [
        { name: 'Pipoca', sales: 'R$ 3.450,00' },
        { name: 'Bebidas', sales: 'R$ 2.780,00' },
        { name: 'Chocolates', sales: 'R$ 1.350,00' },
        { name: 'Combos', sales: 'R$ 4.230,00' }
    ];

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