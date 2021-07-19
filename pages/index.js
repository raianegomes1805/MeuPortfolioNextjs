import Head from 'next/head'
import HeaderCompleto from './Topo/Complimento'
import Sobre from './Sobre/Sobre'
import Projetos from './Projetos/Projetos'
import Contato from './Contato/Contato'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfólio</title>
      </Head>
      <HeaderCompleto/>
      <Projetos/>
      <Sobre/>
      <Contato/>
    </div>
  )
}
