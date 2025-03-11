import styles from './chartContainer.module.css';

const ChartContainer = () => {
    return (
        <div className={styles.chartContainers}>
            <div className={styles.chartContainer}>
                <h3>Desempenho de Bilheteria por Filme</h3>
                <div className={styles.chartPlaceholder}></div>
            </div>

            <div className={styles.chartContainer}>
                <h3>Arrecadação por Semana</h3>
                <div className={styles.chartPlaceholder}></div>
            </div>
        </div>
    );
}

export default ChartContainer;