import styles from './topo.module.css'
import Header from './topo'

export default function TopoCompleto() {
    return (
        <div id="topo">
            <Header/>
            <section className={styles.mainSection}>
                <p className={styles.author}>Raiane Gomes dos Santos</p>
                <p className={styles.subtitle}></p>
                <p className={styles.subtitle}>Tecnologia Analise e desenvolvimento de Sistemas</p>
                <p className={styles.subtitle}>
                </p>
            </section>
        </div>
    )
}