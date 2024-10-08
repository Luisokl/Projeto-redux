//Componente Home
import styles from './home.module.css'
import { Header } from '../../components/header'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux' //método do redux para poder consumir informações

export function Home() {
  // Importando nosso redux user para consumir as informações
  const { user } = useSelector((rootReducer) => rootReducer.user)

  function handleDeleteAddress() {
    alert("Endereço deletado com sucesso!")
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Login
          </Link>
          <Link to="/painel" className={styles.link}>
            Painel
          </Link>
          <Link to="/address" className={styles.link}>
            Meus endereços
          </Link>
        </nav>

        <main className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>
              {user ? user.name : 'Olá visitante'}, Bem Vindo!
            </h1>

            {user && (
              <span>Email: {user.email}</span>
            )}


            {user && user.address && (
              <>
                <strong className={styles.addressLabel}>Endereço atual:</strong>
                <div className={styles.address}>
                  <p>{user.address.location}, N°{user.address.number}</p>

                  <button onClick={handleDeleteAddress}>Deletar endereço</button>
                </div>
              </>
            )}


          </div>

        </main>
      </div>
    </>
  )
}
