import styles from './movieStats.module.css';

const MovieStats = () => {
    return (
        <div className={styles.movieStats}>
            <h3>Filmes em Cartaz</h3>

            <div className={styles.movieTable}>
                <div className={styles.movieTableHeader}>
                    <div className={styles.movieCell}>Filme</div>
                    <div className={styles.movieCell}>Ingressos</div>
                    <div className={styles.movieCell}>Arrecadação</div>
                    <div className={styles.movieCell}>Ocupação</div>
                    <div className={styles.movieCell}>Dias em Cartaz</div>
                </div>

                <div className={styles.movieRow}>
                    <div className={styles.movieCell}>Aventuras Intergaláticas</div>
                    <div className={styles.movieCell}>2.450</div>
                    <div className={styles.movieCell}>R$ 85.750,00</div>
                    <div className={styles.movieCell}>92%</div>
                    <div className={styles.movieCell}>14</div>
                </div>

                <div className={styles.movieRow}>
                    <div className={styles.movieCell}>O Mistério do Vale</div>
                    <div className={styles.movieCell}>1.870</div>
                    <div className={styles.movieCell}>R$ 65.450,00</div>
                    <div className={styles.movieCell}>75%</div>
                    <div className={styles.movieCell}>21</div>
                </div>

                <div className={styles.movieRow}>
                    <div className={styles.movieCell}>Amor em Paris</div>
                    <div className={styles.movieCell}>1.240</div>
                    <div className={styles.movieCell}>R$ 43.400,00</div>
                    <div className={styles.movieCell}>62%</div>
                    <div className={styles.movieCell}>28</div>
                </div>

                <div className={styles.movieRow}>
                    <div className={styles.movieCell}>Velocidade Máxima 5</div>
                    <div className={styles.movieCell}>2.180</div>
                    <div className={styles.movieCell}>R$ 76.300,00</div>
                    <div className={styles.movieCell}>87%</div>
                    <div className={styles.movieCell}>7</div>
                </div>
            </div>
        </div>
    )
}

export default MovieStats;