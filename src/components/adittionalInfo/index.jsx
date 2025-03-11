import styles from './additionalInfo.module.css';

const AdditionalInfo = () => {
    return (
        <div className={styles.additionalInfo}>
            <div className={styles.sessionBox}>
                <h3>Próximas Sessões</h3>
                <ul className={styles.sessionList}>
                    <li>
                        <span className={styles.sessionTime}>14:30</span>
                        <span className={styles.sessionMovie}>Aventuras Intergaláticas</span>
                        <span className={styles.sessionRoom}>Sala 1</span>
                        <span className={styles.sessionCapacity}>87% vendido</span>
                    </li>
                    <li>
                        <span className={styles.sessionTime}>15:00</span>
                        <span className={styles.sessionMovie}>O Mistério do Vale</span>
                        <span className={styles.sessionRoom}>Sala 2</span>
                        <span className={styles.sessionCapacity}>65% vendido</span>
                    </li>
                    <li>
                        <span className={styles.sessionTime}>16:45</span>
                        <span className={styles.sessionMovie}>Amor em Paris</span>
                        <span className={styles.sessionRoom}>Sala 3</span>
                        <span className={styles.sessionCapacity}>42% vendido</span>
                    </li>
                    <li>
                        <span className={styles.sessionTime}>19:00</span>
                        <span className={styles.sessionMovie}>Velocidade Máxima 5</span>
                        <span className={styles.sessionRoom}>Sala 1</span>
                        <span className={styles.sessionCapacity}>93% vendido</span>
                    </li>
                </ul>
            </div>

            <div className={styles.concessionBox}>
                <h3>Vendas Bomboniere</h3>
                <div className={styles.concessionStats}>
                    <div className={styles.concessionItem}>
                        <span className={styles.itemName}>Pipoca</span>
                        <span className={styles.itemSales}>R$ 3.450,00</span>
                    </div>
                    <div className={styles.concessionItem}>
                        <span className={styles.itemName}>Bebidas</span>
                        <span className={styles.itemSales}>R$ 2.780,00</span>
                    </div>
                    <div className={styles.concessionItem}>
                        <span className={styles.itemName}>Chocolates</span>
                        <span className={styles.itemSales}>R$ 1.350,00</span>
                    </div>
                    <div className={styles.concessionItem}>
                        <span className={styles.itemName}>Combos</span>
                        <span className={styles.itemSales}>R$ 4.230,00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalInfo;