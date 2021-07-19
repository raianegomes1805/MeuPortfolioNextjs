import styles from './Sobre.module.css'
import {faArrowDown} from '@fortawesome/fontawesome-svg-core'
import {faCss3} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faHtml5, faJava, faJs, faLinkedin,} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

export default function Sobre() {

    const [showLanguages, setShowLanguages] = useState(false);

    const showLanguage = () => {
        setShowLanguages(!showLanguages)
    }

    return (
        <>
            <div id="sobreSection" className={styles.sobreSection}>
                <h1 className={styles.sectionTitle}>Sobre</h1>
                <div className={styles.face}></div>
                <p className={styles.name}>Raiane Gomes Dos Santos</p>
                <p className={styles.aboutSection}>Cursando 5º Semestre de Análise e desenvolvimento de sistemas - Instituto Federal de Mato Grosso do Sul(IFMS)</p>
                <div className={styles.socialMedia}>
                    <a href="https://github.com/raianegomes1805" aria-label="Github" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/raiane-gomes-dos-santos-14a028168/" aria-label="Linkedin" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
                <div className={styles.btnVerMais} onClick={showLanguage}>
                    <p className={styles.btnVerMaisTexto}>Ver {showLanguages ? "Menos": "Mais"}</p>
                    <FontAwesomeIcon icon={faArrowDown}/>
                </div>
                { showLanguages && (
                    <div className={styles.languagesContainer}>
                        <p>Tenho conhecimento em:</p>
                        <ul className={styles.languages}>
                        <FontAwesomeIcon className={`${styles.java} ${styles.language}`} icon={faJava}/>
                            <FontAwesomeIcon className={`${styles.github} ${styles.language}`} icon={faGithub}/>
                            <FontAwesomeIcon className={`${styles.html} ${styles.language}`} icon={faHtml5}/>
                            <FontAwesomeIcon className={`${styles.css} ${styles.language}`} icon={faCss3}/>
                            <FontAwesomeIcon className={`${styles.javascript} ${styles.language}`} icon={faJs}/>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}