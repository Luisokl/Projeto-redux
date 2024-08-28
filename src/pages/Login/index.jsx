import { useState } from 'react'; 
import styles from './login.module.css'

import { Link, Navigate, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'; // método para disparar uma ação
import { createUser } from '../../redux/user/slice' // importando a action 

export function Login() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  function handleLogin(e){
    e.preventDefault()

    if(name === '' && email === ''){
      alert('DIGITE AS INFORMAÇÕES DO USUÁRIO!!')
      return
    }
    
    // enviando as informações do usuário para o redux user
    dispatch(createUser({
      name: name,
      email: email
    }))

    navigate('/painel')
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <Link to="/painel">
            <h1 className={styles.title}>Dev Login</h1>
          </Link>

          <form onSubmit={handleLogin} className={styles.form}>
            <input 
              type="text" 
              className={styles.input}
              value={name}
              onChange={ event => setName(event.target.value)}
              placeholder='Digite seu nome....'
            />
            <input 
              type="text" 
              className={styles.input}
              value={email}
              onChange={ event => setEmail(event.target.value)}
              placeholder='Digite seu email...'
            />

            <button type="submit">Acessar</button>
          </form>
      </main>
    </div>
  )
}
