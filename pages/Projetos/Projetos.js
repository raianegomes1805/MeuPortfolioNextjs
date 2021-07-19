import Projeto from '../Projeto/Projeto'
import styles from './Projetos.module.css'
import ProjectApi from'../../src/core/api/ProjectApi'
import {useState, useEffect} from 'react'
import Router from 'next/router'

export default function Projetos() {

    const [projects, setProjects] = useState([])

    useEffect(async() => {
        const response = await ProjectApi.buscarProjetos()
        setProjects(response.projects)
    }, [])

    const redirecionarPagina = (projetoId) => {
        Router.push(`${projetoId}`)
    }

    return (
        <section id="projectSection" className={styles.projectsSection}>
            <h1 className={styles.sectionName}>Projetos</h1>
            <div className={styles.projectsContainer}>
                {
                    projects.map(project => (
                        <div
                            className={styles.project}
                            onClick={() => redirecionarPagina(project.uid)}>
                                <Projeto
                                    image="https://miro.medium.com/max/4000/0*MZMl76wKo2FQLqG0.png"
                                    description={project.description}/>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}